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

		if (st_id != stud_id) {
			getWrittenWork(stud_id);
			getPerformanceTask(stud_id);
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


	// percentage update 

	$('.btn-percentage').click(function() {
		$('.menu-panel form input').removeAttr('disabled');
		$(this).hide();
		$('.btn-update-percentage').show();
		$('.quarter-input').focus();
	});

	$('div.teacher-class table tr td select').on('change', function() {
		
		var quarter = $('.select-quarter').val(),
		 	section = $('.select-section').val(),
		 	//quarter = $('.select-teacher').val(),
		 	subject = $('.select-subject').val();

		if (quarter != "" && section != "" && subject != "") {
			alert('ok');
		}

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
		$('.table-student tr').addClass('hidden');

		if (txt == "Boys") {
		
			$('.table-student tr td .gender-hidden').each(function() {
				
				if ( $(this).val() == "M" ) {
				
					$( this ).closest('tr').removeClass('hidden');
				} 
			});

		} else if (txt == "Girls") {

			$('.table-student tr td .gender-hidden').each(function() {
				
				if ( $(this).val() == "F" ) {
				
					$( this ).closest('tr').removeClass('hidden');
				} 
			});
			
		} else {
			$('.table-student tr').removeClass('hidden');
		}
	
	});

	// search student 
	$('.search-student form input').on('keyup', function() {

		var str = $(this).val();

		if (str.length > 2 ) {

			$('.table-student tr td span').each(function() {
				var txt	   = $( this ).text(),
					txt    = txt.toLowerCase(),
				    re     = new RegExp(txt, 'i'),
				    result = txt.match(str);
				
				if (result) {
					$('.table-student tr').addClass('hidden');
					$( this ).closest('tr').removeClass('hidden');
				}
			});

		} else {
			$('.table-student tr').removeClass('hidden');
		}
		
	});

});