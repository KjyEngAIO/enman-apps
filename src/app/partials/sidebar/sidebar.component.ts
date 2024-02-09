import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
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