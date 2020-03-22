<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">

	<title>Novel Coronavirus 2019</title>
</head>
<body>
	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top mb-3">
			<div class="container">
					<a class="navbar-brand" href="#">Novel Coronavirus 2019</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarResponsive">
							<ul class="navbar-nav ml-auto">
									<li class="nav-item active">
											<a class="nav-link" href="/">Home
													<span class="sr-only">(current)</span>
											</a>
									</li>
							</ul>
					</div>
			</div>
	</nav>

	<div id="overlay">
		<h2><i class='fas fa-cog fa-spin custom-loader-color'></i> Loading ... </h2>
	</div>

	<!-- Page Content -->
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				

				<table class="table table-striped table-hover table-bordered table-sm text-sm" id="tbl_status">
					<thead class="thead-dark">
						<tr>
							<th scope="col">Country</th>
							<th scope="col">Province</th>
							<th scope="col">Confirmed</th>
							<th scope="col">Recovered</th>
							<th scope="col">Deaths</th>
							<th scope="col">Last Update</th>
						</tr>
					</thead>
					<tbody></tbody>
				</table>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
</body>
</html>