import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aio-kejayan',
  templateUrl: './aio-kejayan.component.html',
  styleUrls: ['./aio-kejayan.component.css']
})
export class AioKejayanComponent {
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
