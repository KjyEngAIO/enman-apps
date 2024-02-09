import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
	noFeature = () => {
		Swal.fire({
			title: 'The feature is not available yet',
			text: 'Be patient please!',
			icon: 'warning',
			confirmButtonText: 'Close',
			showCancelButton: false
		});
	}
}
