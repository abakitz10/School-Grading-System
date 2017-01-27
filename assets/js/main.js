$( document ).ready(function() {

	// get written works

	function getWrittenWork(stud_id) {
		$.ajax({
			url : 'model/getWrittenWork.php',
			method: 'POST',
			dataType: 'json',
			data: {id: stud_id},
			success: function(data) {
				$('.written-works table tbody tr td:eq(0)').text(data['written_1']);
				$('.written-works table tbody tr td:eq(1)').text(data['written_2']);
				$('.written-works table tbody tr td:eq(2)').text(data['written_3']);
				$('.written-works table tbody tr td:eq(3)').text(data['written_4']);
				$('.written-works table tbody tr td:eq(4)').text(data['written_5']);
				$('.written-works table tbody tr td:eq(5)').text(data['written_6']);
				$('.written-works table tbody tr td:eq(6)').text(data['written_7']);
				$('.written-works table tbody tr td:eq(7)').text(data['written_8']);
				$('.written-works table tbody tr td:eq(8)').text(data['written_9']);
				$('.written-works table tbody tr td:eq(9)').text(data['written_10']);
			}
		});
	}

	// get performance tasks

	function getPerformanceTask(stud_id) {

		$.ajax({
			url : 'model/getPerformanceTask.php',
			method: 'POST',
			dataType: 'json',
			data: {id: stud_id},
			success: function(data) {
				//console.log(data);
				$('.performance-task table tbody tr td:eq(0)').text(data['p_1']);
				$('.performance-task table tbody tr td:eq(1)').text(data['p_2']);
				$('.performance-task table tbody tr td:eq(2)').text(data['p_3']);
				$('.performance-task table tbody tr td:eq(3)').text(data['p_4']);
				$('.performance-task table tbody tr td:eq(4)').text(data['p_5']);
				$('.performance-task table tbody tr td:eq(5)').text(data['p_6']);
				$('.performance-task table tbody tr td:eq(6)').text(data['p_7']);
				$('.performance-task table tbody tr td:eq(7)').text(data['p_8']);
				$('.performance-task table tbody tr td:eq(8)').text(data['p_9']);
				$('.performance-task table tbody tr td:eq(9)').text(data['p_10']);
			}
		});
	}

	// get student by section

	function getStudentBySection(section) {
		$.ajax({
			url : 'model/getStudentBySection.php',
			method: 'POST',
			dataType: 'json',
			data: {section: section},
			success: function(data) {
				$('.content-panel > table tbody').empty();	
				for (var i = 0; i < data.length; i++) {

					var row = "<tr>"
								+ "<td>" + data[i].id + "</td>"
								+ "<td>" + data[i].last_name + "</td>"
								+ "<td>" + data[i].first_name + "</td>"
								+ "<td>" + data[i].middle_name + "</td>"
							+ "</tr>";
						
					$('.content-panel > table tbody').hide();		
					$('.content-panel > table tbody').append(row);
					$('.content-panel > table tbody').fadeIn();		
				}
	
			}
		});
	}

	// table row click event 
	var row = "section .content-panel table tbody tr";

	$( row ).click(function() {

		$( row ).removeClass('row-active');
		$( this ).addClass('row-active');

		var stud_id = $( this ).children('td:eq(0)').text();	
		getWrittenWork(stud_id);
		getPerformanceTask(stud_id);

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
	$('.btn-update-percentage').click(function(e) {
		//e.preventDefault();
		//('.menu-panel form input').attr('disabled', 'disabled');
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
		$('#myModal').modal('show');
		
	});

	// add student

	$('.save-student').click(function() {
		var fname = $('.modal-body #fname').val(),
			mname = $('.modal-body #mname').val(),
		 	lname = $('.modal-body #lname').val(),
		 	section = $('.modal-body #section').val();

		if (fname == "" || mname == "" || lname == "" || section == "") {
			alert('Please input fields.');
		} else {

		}
	});

});