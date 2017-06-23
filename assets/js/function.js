	// get written works

	function getWrittenWork(stud_id) {
		$.ajax({
			url : 'model/getWrittenWork.php',
			method: 'POST',
			dataType: 'json',
			data: {id: stud_id},
			success: function(data) {
				if (data != null) {
					$('.written-works table tbody tr td:eq(0) input').val(data['written_1']);
					$('.written-works table tbody tr td:eq(1) input').val(data['written_2']);
					$('.written-works table tbody tr td:eq(2) input').val(data['written_3']);
					$('.written-works table tbody tr td:eq(3) input').val(data['written_4']);
					$('.written-works table tbody tr td:eq(4) input').val(data['written_5']);
					$('.written-works table tbody tr td:eq(5) input').val(data['written_6']);
					$('.written-works table tbody tr td:eq(6) input').val(data['written_7']);
					$('.written-works table tbody tr td:eq(7) input').val(data['written_8']);
					$('.written-works table tbody tr td:eq(8) input').val(data['written_9']);
					$('.written-works table tbody tr td:eq(9) input').val(data['written_10']);
				} else {
					$('.written-works table tbody tr td:eq(0) input').val('0');
					$('.written-works table tbody tr td:eq(1) input').val('0');
					$('.written-works table tbody tr td:eq(2) input').val('0');
					$('.written-works table tbody tr td:eq(3) input').val('0');
					$('.written-works table tbody tr td:eq(4) input').val('0');
					$('.written-works table tbody tr td:eq(5) input').val('0');
					$('.written-works table tbody tr td:eq(6) input').val('0');
					$('.written-works table tbody tr td:eq(7) input').val('0');
					$('.written-works table tbody tr td:eq(8) input').val('0');
					$('.written-works table tbody tr td:eq(9) input').val('0');
				}
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
				if (data != null) {
					$('.performance-task table tbody tr td:eq(0) input').val(data['p_1']);
					$('.performance-task table tbody tr td:eq(1) input').val(data['p_2']);
					$('.performance-task table tbody tr td:eq(2) input').val(data['p_3']);
					$('.performance-task table tbody tr td:eq(3) input').val(data['p_4']);
					$('.performance-task table tbody tr td:eq(4) input').val(data['p_5']);
					$('.performance-task table tbody tr td:eq(5) input').val(data['p_6']);
					$('.performance-task table tbody tr td:eq(6) input').val(data['p_7']);
					$('.performance-task table tbody tr td:eq(7) input').val(data['p_8']);
					$('.performance-task table tbody tr td:eq(8) input').val(data['p_9']);
					$('.performance-task table tbody tr td:eq(9) input').val(data['p_10']);
				} else {
					$('.performance-task table tbody tr td:eq(0) input').val('0');
					$('.performance-task table tbody tr td:eq(1) input').val('0');
					$('.performance-task table tbody tr td:eq(2) input').val('0');
					$('.performance-task table tbody tr td:eq(3) input').val('0');
					$('.performance-task table tbody tr td:eq(4) input').val('0');
					$('.performance-task table tbody tr td:eq(5) input').val('0');
					$('.performance-task table tbody tr td:eq(6) input').val('0');
					$('.performance-task table tbody tr td:eq(7) input').val('0');
					$('.performance-task table tbody tr td:eq(8) input').val('0');
					$('.performance-task table tbody tr td:eq(9) input').val('0');
					
				}
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
								+ "<td><span>" + data[i].id + "</span>"
								+ "<input type='text' name='gender' class='gender-hidden hidden' value='" + data[i].gender + "'>"
								+ "<input type='text' name='section' class='section-hidden hidden' value='" + data[i].grade_section + "'>"
								+"</td>"
								+ "<td><span>" + data[i].last_name + "</span></td>"
								+ "<td><span>" + data[i].first_name + "</span></td>"
								+ "<td><span>" + data[i].middle_name + "</span>"
								+ "<div class='student-btn hidden'>"
								+ "<button data-id='" + data[i].id + "' type='button' class='btn btn-xs btn-primary'>Edit</button> | "
								+ "<button data-id='" + data[i].id + "' type='button' class='btn btn-xs btn-danger'>Delete</button>"
								+ "</div>"
								+ "</td>"
							+ "</tr>";
						
					$('.content-panel > table tbody').hide();		
					$('.content-panel > table tbody').append(row);
					$('.content-panel > table tbody').fadeIn();		
				}
	
			}
		});
	}

	function addStudent(fname,mname,lname,gender,section) {

		$.ajax({
			url : 'model/ajax/addStudent.php',
			method: 'POST',
			// dataType: 'json',
			data: {
				fname : fname,
				mname : mname,
				lname : lname,
				gender : gender,
				section: section
			},
			success: function(data) {
				//console.log(data);
				if (data) {
					
					setTimeout(function() {
						alert('Student successfully saved!');
						$('.save-student').removeAttr('disabled');
						$('.modal-footer .progress').addClass('hidden');
						$('#myModal').modal('hide');
						location.reload();
					}, 2000);

					
				} 
			}
		});

	}

	function deleteStudent(id) {

		$.ajax({
			url : 'model/ajax/deleteStudent.php',
			method: 'POST',
			data: { id : id },
			success: function(data) {

				if (data) {
					
					setTimeout(function() {
						$( '#modal-confirm .progress' ).addClass('hidden');
						alert('Student successfully deleted.');
						$('#modal-confirm').modal('hide');

						$('.table-student td').each(function() {
							var txt = $(this).text();
							
							if (txt == id) {
							
								$(this).parent('tr').slideToggle('slow');

							}
						});

					}, 2000);

				
				}
			}
		});
	}
	
	function updateStudent(id,fname,mname,lname,gender,section) {

		$.ajax({
			url : 'model/ajax/updateStudent.php',
			method: 'POST',
			data: { 
				id      : id,
				fname   : fname,
				mname   : mname,
				lname   : lname,
				gender  : gender,
				section : section
			},
			success: function(data) {

				if (data) {
	
					setTimeout(function() {
						
						$( '#myModal .progress' ).addClass('hidden');
						alert('Successfully updated.');
						$('#myModal').modal('hide');

						location.reload();

					}, 2000);

				
				}
			}
		});

	}

	function notificationMesage(message) {

		$('body .ba-notification').remove();

		var html = '<div class="ba-notification">' ;
		html += message + '</div>';

		$('body').prepend(html);
	} 		
	