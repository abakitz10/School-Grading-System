<?php

include('PerformanceTask.php');

$stud_id = $_POST['id'];

$task = new MyClass\PerformanceTask();

$result = $task->getAll($stud_id);

echo json_encode($result);