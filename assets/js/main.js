$( document ).ready(function() {

	/*Global variables*/
	var st_id 	= '',
		fname 	= '',
		mname 	= '',
		lname 	= '';
		gender 	= '',
		section = '';

	/* end of global variables*/
	

	// table row click event 
	var row = ".table-student tbody tr";

	$( document ).on('click', row , function() { //dyamic on click elements

		$( row ).removeClass('row-active');
		$( this ).addClass('row-active');

		$( row ).find('.student-btn').addClass('hidden');
		$( this ).find('.student-btn').removeClass('hidden');
		
		var stud_id = $( this ).children('td:eq(0)').text();	

		if (st_id != stud_id && 
			$('.select-quarter').val() != "" && 
			$('.select-section').val() != "" && 
			$('.select-subject').val() != "" )  {
			getWrittenWork(stud_id);
			getPerformanceTask(stud_id);
		} else if (
			$('.select-quarter').val() != "" || 
			$('.select-section').val() != "" || 
			$('.select-subject').val() != "" ) {

			$('.table-records table tr td input').val('0');

		}

	});
	// end of table row click event

	$( 'section .menu-panel ul li' ).click(function() {
		var active = $( "section .content-panel table tbody tr.row-active" ).length;

		if ( active == 0 ) {
			$('.content-panel > div.alert').slideToggle();
		} else {
			$('.content-panel > div.alert').hide(300);
			$('.modal-title').text( $(this).find('button').text() );

			var name = $( "section .content-panel table tbody tr.row-active" ).children('td:eq(1)').text();
	
			$('.modal-body h3.student-name span').text( name );
			
			$('#myModal').modal('show');
		}

	});

	$('.content-panel > div.alert > .close').click(function() {
		$('.content-panel > div.alert').slideToggle();
	});

	$('div.teacher-class table tr td select.select-section').on('change', function() {
		var section = $(this).val();
		getStudentBySection(section);
		$('.select-quarter').removeAttr('disabled');
		$('.select-subject').removeAttr('disabled');
	});

	$('.add-student').click(function() {
		$('.save-student').show();
		$('.update-student').hide();
		$('.form-student #fname').val('');
		$('.form-student #mname').val('');
		$('.form-student #lname').val('');
		$('#myModal').modal('show');
	});

	// add student
	$('.save-student').click(function() {

		var fname 	= $('.modal-body #fname').val(),
			mname 	= $('.modal-body #mname').val(),
		 	lname 	= $('.modal-body #lname').val(),
		 	gender  = $('#myModal div.radio input:checked').val();
		 	section = $('.modal-body #section').val();

		
		if (fname == "" || mname == "" || lname == ""
		   || gender == undefined || gender == "" || section == "") {

			alert('All fields are required.');
			
		} else {

			$('#myModal .progress').removeClass('hidden');
			$(this).attr('disabled','disabled');
			addStudent(fname,mname,lname,gender,section);
		}

	});


	// delete student	
	$( document ).on('click', '.table-student .btn-danger', function () {
		
		$('#modal-confirm').modal('show');
		st_id = $( this ).data('id');
	});

	$('#delete-yes').click(function() {
		
		$( '#modal-confirm .progress' ).removeClass('hidden');
		
		deleteStudent(st_id);
		

		$(st_id ).closest('tr').hide();
		
	});

    // edit student
	$( document ).on('click', '.table-student .btn-primary', function() {

		var tr = $( this ).closest('tr');

		st_id 	= $( this ).data('id');
		fname 	= $( tr ).find('td:eq(2) span').text();
		mname 	= $( tr ).find('td:eq(3) span').text();
		lname 	= $( tr ).find('td:eq(1) span').text();	
		gender  = $( tr ).find('td:eq(0) .gender-hidden').val();	
		section = $( tr ).find('td:eq(0) .section-hidden').val();

		$('.form-student #fname').val(fname);
		$('.form-student #mname').val(mname);
		$('.form-student #lname').val(lname);
		$('.form-student #section').val(section);

		(gender == 'M') ? $('.form-student #male').attr('checked', 'checked') : $('.form-student #female').attr('checked', 'checked');
			
		$('.save-student').hide();
		$('.update-student').show();
		$( '#myModal' ).modal('show');

	});

	$('.update-student').click(function() {

		fname 	= $('.form-student #fname').val();
		mname	= $('.form-student #mname').val();
		lname 	= $('.form-student #lname').val();	
		section = $('.form-student #section').val();	
		gender  = $('.form-student .radio input:checked').val();

		$( '#myModal .progress' ).removeClass('hidden');
		updateStudent(st_id,fname,mname,lname,gender, section);

	});

	// sort table student
	$('.select-gender').on('change', function() {

		var txt = $(this).val();
		$('.table-student tbody tr').addClass('hidden');

		if (txt == "Boys") {
		
			$('.table-student tbody tr td .gender-hidden').each(function() {
				
				if ( $(this).val() == "M" ) {
				
					$( this ).closest('tr').removeClass('hidden');
				} 
			});

		} else if (txt == "Girls") {

			$('.table-student tbody tr td .gender-hidden').each(function() {
				
				if ( $(this).val() == "F" ) {
				
					$( this ).closest('tr').removeClass('hidden');
				} 
			});
			
		} else {
			$('.table-student tbody tr').removeClass('hidden');
		}
	
	});

	// search student 
	$('.search-student form input').on('keyup', function() {

		var str = $(this).val();

		if (str.length > 2 ) {

			$('.table-student tbody tr td span').each(function() {
				var txt	   = $( this ).text(),
					txt    = txt.toLowerCase(),
				    re     = new RegExp(txt, 'gi'),
				    result = txt.match(str);
				
				if (result) {
					$('.table-student tbody tr').addClass('hidden');
					$( this ).closest('tr').removeClass('hidden');
				}
			});

		} else {
			$('.table-student tbody tr').removeClass('hidden');
		}
		
	});


	$('.login-panel form .form-group button:eq(1)').click(function() {
		$('.login-panel form:eq(0)').hide();
		$('.login-panel form:eq(1)').slideToggle('slow');
	});
	$('.login-panel form.form-register > a').click(function() {
		$('.login-panel form:eq(0)').slideToggle();
		$('.login-panel form:eq(1)').hide();
	});

	$('button.btn-register').click(function(e) {

		e.preventDefault();

		var emailExist = 0;

		

		if ( $('#password-2').val() != $('#password-1').val() ) {
			notificationMesage("Password not match!");
		} else {
			$.ajax({
				url : 'model/ajax/checkEmail.php',
				data : {
					email : $('#email').val()
				},
				type : 'post',
				success : function(data) {
					if (data) {
						notificationMesage("Email already exist");
					} else {
						$('.form-register').submit();
					}
				}
			});
		}

	});

	// toggle menu
	$('header .slide-menu .glyphicon.glyphicon-menu-hamburger').click(function() {
		$(this).hide();
		$('header .slide-menu .menus').slideDown();
	});
	$('header .slide-menu .glyphicon.glyphicon-remove').click(function() {
		$('header .slide-menu .menus').slideUp();
		$('header .slide-menu .glyphicon.glyphicon-menu-hamburger').show('slow');
	});

	// add section
	$('.btn-section').click(function() {
		$('.add-new-section').slideDown();
	});
	$('.btn.save-section').click(function(e) {

		console.log('ok');
	});

	$('header .slide-menu .menu-list > ul > li:nth-child(2)').click(function() {
		alert('ok');
	});

});