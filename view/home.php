<body class="container">
    <!-- Header -->
    <header>
        <h1>Class Record</h1>
        <div class="school-info">
            <table class="table table-bordered">
                <tr>
                    <td>School name: <span>BULACAO ELEMENTARY SCHOOL</span></td>
                    <td>Region: <span>VII</span></td>
                </tr>
                <tr>
                    <td>School Id: <span>119794</span></td>
                    <td>Division: <span>TALISAY CITY</span></td>
                </tr>
                <tr>
                    <td>School Year: <span>2016-2017</span></td>
                    <td>District: <span>TALISAY II</span></td>
                </tr>
            </table>
            <hr>
            <div class="teacher-class">
                <table>
                    <tr>
                        <td>Quarter: 
                            <select class="select-quarter" disabled>
                                <option></option>
                                <option>Second</option>
                            </select>
                        </td>
                        <td>Grade & Section:
                            <select class="select-section">
                                <option></option>
                                <option>VI-ABAQUITA</option>
                                <option>Grade 2</option>
                                <option>Grade 3</option>
                                <option>Grade 4</option>
                                <option>Grade 5</option>
                                <option>Grade 6</option>
                                <option>Grade 7</option>
                            </select>
                        </td>
                        <td>Teacher:
                            <select class="select-teacher">
                                <!-- <option></option> -->
                                <option>MARITES L. ABAQUITA</option>
                            </select>
                        </td>
                        <td>Subject:
                             <select class="select-subject" disabled>
                                <option></option>
                                <option>FILIPINO</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    </header>
    <!-- end of header -->
    
    <!--Main Content -->
    <section>
        <aside class="menu-panel">
                <div class="table-records">
            <div class="written-works">
                <h4>Written Works</h4>
                <table class="table table-stripped">
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>Total</th>
                            <th>PS</th>
                            <th>WS</th>
                        </tr>
                        <tr>
                            <th>25</th>
                            <th>20</th>
                            <th>25</th>
                            <th>20</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>90</th>
                            <th>100.00</th>
                            <th>30%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div class="performance-task">
                <h4>Performance Task</h4>
                    <table class="table table-stripped">
                        <thead>
                            <tr>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>Total</th>
                                <th>PS</th>
                                <th>WS</th>
                            </tr>
                            <tr>
                                <th>25</th>
                                <th>20</th>
                                <th>25</th>
                                <th>20</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>90</th>
                                <th>100.00</th>
                                <th>30%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="quarterly-assessment">
                <h4>Quarterly Assessment</h4>
                    <table class="table table-stripped">
                        <thead>
                            <tr>
                                <th>1</th>
                                <th>PS</th>
                                <th>WS</th>
                                <th>Initial</th>
                                <th>Q.Grade</th>
                            </tr>
                            <tr>
                                <th>25</th>
                                <th>20</th>
                                <th>25</th>
                                <th>100.00</th>
                                <th>30%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        
        </aside>

        <div class="content-panel">  
            <div>
                <button class="add-student btn btn-primary">Add Student</button>
            </div>
            <div class="search-student">
                <form>
                    <input type="text" placeholder="Search student...">
                    <select class="form-control select-gender">
                        <option>All</option>
                        <option>Boys</option>
                        <option>Girls</option>
                    </select>
                </form>
            </div>   
            <table class="table table-student table-stripped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Last name</th>
                        <th>First name</th>
                        <th>Middle name</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <?php include('model/Student.php'); ?>
                    <?php

                    $student = new MyClass\Student();

                    $result = $student->getAll();

                    if (mysqli_num_rows($result) != 0) {
                        while($row = mysqli_fetch_assoc($result)) {

                            $stud_id = $row['id'];
                            $fullname = $row['last_name'] . ', ' . $row['first_name'] . ' '. $row['middle_name']; 

                            echo "<tr>";
                                echo "<td><span>" . $row['id'] . "</span>
                                    <input type='text' name='gender' class='gender-hidden hidden' value='" . $row['gender'] . "'> 
                                    <input type='text' name='section' class='section-hidden hidden' value='" . $row['grade_section'] . "'> 
                                
                                </td>";
                                echo "<td><span>" . $row['last_name'] . "</span></td>";
                                echo "<td><span>" . $row['first_name'] . "</span></td>";
                                echo "<td><span>" . $row['middle_name'] .
                                '</span><div class="student-btn hidden" style="float: right;">
                                <button data-id=' . $row["id"] .'  type="button" class="btn btn-xs btn-primary">Edit</button> 
                                | <button data-id=' . $row["id"] .' type="button" class="btn btn-xs btn-danger">Delete</button></div>'  . "</td>";
                                 
                               
                            echo "</tr>";
                        }
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </section>
    <!-- end of main content -->

    <div class="modal fade" id="myModal">
      
        <div class="modal-content">
              <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Student</h4>
        </div>
          <div class="modal-body">
            <form class="form-student">
                <table>
                    <tr>
                        <td>
                            <div class="form-group">
                                <label for="fname">First name</label>
                                <input type="text" class="form-control" id="fname">
                            </div>
                        </td>
                  
                        <td>
                            <div class="form-group">
                                <label for="mname">Middle name</label>
                                <input type="text" class="form-control" id="mname">
                            </div>
                        </td>
                    
                        <td>
                            <div class="form-group">
                                <label for="lname">Last name</label>
                                <input type="text" class="form-control" id="lname">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-group">
                                <label for="section">Section</label>
                                <select class="form-control" id="section">
                                    <option></option>
                                    <option>VI-ABAQUITA</option>
                                    <option>Grade 2</option>
                                    <option>Grade 3</option>
                                    <option>Grade 4</option>
                                    <option>Grade 5</option>
                                    <option>Grade 6</option>
                                    <option>Grade 7</option>
                                </select>   
                            </div>
                        </td>
                        <td>
                            <div class="radio">
                              <label>
                                <input type="radio" name="gender" id="male" value="M">
                                Male
                              </label>
                            </div>
                            
                        </td>
                        <td>
                            <div class="radio">
                              <label>
                                <input type="radio" name="gender" id="female" value="F">
                                Female
                              </label>
                            </div>
                        </td>
                    </tr>
                </table>
            </form>
          </div>
          <div class="modal-footer">
            <div class="progress hidden">
              <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                <span>Please wait...</span>
              </div>
            </div>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="save-student btn btn-primary">Save Student</button>
            <button type="button" class="update-student btn btn-primary">Update Student</button>
          </div>
        </div><!-- /.modal-content -->
    </div>

    <div class="modal fade" id="modal-confirm">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title">Confirm</h4>
          </div>
          <div class="modal-body">
            <p>Are you sure to delete?</p>
          </div>
          <div class="modal-footer">
            <div class="progress hidden">
              <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                <span>Please wait...</span>
              </div>
            </div>
            <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
            <button type="button" class="btn btn-primary" id="delete-yes">Yes</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->