<header class="login-header">
</header>
<div class="container login-panel">
	<form class="form-horizontal" method="POST" action="/model/login.php">
	  <h1>Sign In</h1>
	  <div class="form-group">
	    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
	    <div class="col-sm-10">
	      <input type="email" class="form-control" id="inputEmail3" name="email" placeholder="Email">
	    </div>
	  </div>
	  <div class="form-group">
	    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
	    <div class="col-sm-10">
	      <input type="password" class="form-control" id="inputPassword3" name="password" placeholder="Password">
	    </div>
	  </div>
	  <div class="form-group">
	    <div class="col-sm-offset-2 col-sm-10">
	      <div class="checkbox">
	        <label>
	          <input type="checkbox"> Remember me
	        </label>
	      </div>
	    </div>
	  </div>
	  <div class="form-group">
	    <div class="col-sm-offset-2 col-sm-10">
	      <button type="submit" class="btn btn-default">Sign in</button>
	      <button type="button" class="btn btn-link">Create Account</button>
	    </div>
	  </div>
	</form>

	<form class="form-register" action="/model/register.php" method="post">
	  <a class="btn btn-link"><--- Login</a>
	  <h1>Register !</h1>
	
	  <h5>Teacher</h5> 	 
	  <hr>
	  <table class="table teacher"> 
	  	<tr>
	  		<td>
			  <div class="form-group">
			    <label for="first-name">First Name</label>
			    <input type="text" class="form-control" id="first-name" name="first-name" required>
			    
			  </div>
			</td>
			<td>
			  <div class="form-group">
			    <label for="middle-name" >Middle Name</label>	    
			    <input type="text" class="form-control" id="middle-name" name="middle-name"  required>
			  </div>
			</td>
			<td>
			  <div class="form-group">
			    <label for="last-name">Last Name</label>	   
			    <input type="text" class="form-control" id="last-name" name="last-name"  required>
			  </div>
			</td>
			<td>
			  <div class="form-group">
			    <label for="gender">Gender</label>	   
			    <select class="form-control" id="gender" name="gender">
			    	<option>Female</option>
			    	<option>Male</option>
			    </select>
			  </div>
			</td>
		</tr>
	  </table>
	  <h5>Login Details</h5>
	  <hr>
	  <table class="table"> 
	  	<tr>
	  		<td>
			  <div class="form-group">
			    <label for="email">Email</label>
			    <input type="email" class="form-control" id="email" name="email" required>
			    
			  </div>
			</td>
			<td>
			  <div class="form-group">
			    <label for="password-1" >Password</label>	    
			    <input type="password" class="form-control" id="password-1" name="password-1" required>
			  </div>
			</td>
			<td>
			  <div class="form-group">
			    <label for="password-2">Re-Password</label>	   
			    <input type="password" class="form-control" id="password-2" name="password-2" required>
			  </div>
			</td>
		</tr>
	  </table>
	  <br>
	
 <div class="form-group" style="text-align: center;">
					     <button type="submit" class="btn btn-default btn-primary btn-register">Register!</button>
					  </div>

	</form>

</div>

