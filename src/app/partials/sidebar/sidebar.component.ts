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
			title: 'Feature doesn`t exist yet, because it`s still in design!',
			text: 'Be patient please!',
			icon: 'warning',
			confirmButtonText: 'Close',
			showCancelButton: false
		});
	}
	// MENU CILT TASK LIST
	fsb_cilt: boolean = false;
	cooling_tower_cilt: boolean = false;
	power_plant_cilt: boolean = false;
	auxiliary_cilt: boolean = false;
	lowpresscomp_cilt: boolean = false;
	highpresscomp_cilt: boolean = false;
	wtp_miot: boolean = false;
	electricity_miot: boolean = false;
	fsb_miot: boolean = false;
	chiller_miot: boolean = false;
	compressed_miot: boolean = false;

	fsbDropdown = () => {
		this.fsb_cilt = !this.fsb_cilt;
		if (this.fsb_cilt) {
			this.cooling_tower_cilt = false;
			this.power_plant_cilt = false;
			this.lowpresscomp_cilt = false;
			this.highpresscomp_cilt = false;
			this.auxiliary_cilt = false;
		}
	}
	coolingTowerDropdown = () => {
		this.cooling_tower_cilt = !this.cooling_tower_cilt;
		if (this.cooling_tower_cilt) {
			this.fsb_cilt = false;
			this.power_plant_cilt = false;
			this.auxiliary_cilt = false;
			this.lowpresscomp_cilt = false;
			this.highpresscomp_cilt = false;
		}
	}
	powerPlantDropdown = () => {
		this.power_plant_cilt = !this.power_plant_cilt;
		if (this.power_plant_cilt) {
			this.cooling_tower_cilt = false;
			this.fsb_cilt = false;
			this.auxiliary_cilt = false;
			this.lowpresscomp_cilt = false;
			this.highpresscomp_cilt = false;
		}
	}
	auxiliaryDropdown = () => {
		this.auxiliary_cilt = !this.auxiliary_cilt;
		if (this.auxiliary_cilt) {
			this.cooling_tower_cilt = false;
			this.power_plant_cilt = false;
			this.fsb_cilt = false;
			this.lowpresscomp_cilt = false;
			this.highpresscomp_cilt = false;
		}
	}
	lowPressCompDropdown = () => {
		this.lowpresscomp_cilt = !this.lowpresscomp_cilt;
		if (this.lowpresscomp_cilt) {
			this.auxiliary_cilt = false;
			this.cooling_tower_cilt = false;
			this.power_plant_cilt = false;
			this.fsb_cilt = false;
			this.highpresscomp_cilt = false;
		}
	}
	highPressCompDropdown = () => {
		this.highpresscomp_cilt = !this.highpresscomp_cilt;
		if (this.highpresscomp_cilt) {
			this.lowpresscomp_cilt = false;
			this.auxiliary_cilt = false;
			this.cooling_tower_cilt = false;
			this.power_plant_cilt = false;
			this.fsb_cilt = false;
		}
	}
	wtpMaintenanceIoT = () => {
		this.wtp_miot = !this.wtp_miot;
		if (this.wtp_miot) {
			this.compressed_miot = false;
			this.chiller_miot = false;
			this.fsb_miot = false;
			this.electricity_miot = false;
			this.lowpresscomp_cilt = false;
			this.auxiliary_cilt = false;
			this.cooling_tower_cilt = false;
			this.power_plant_cilt = false;
			this.fsb_cilt = false;
		}
	}
	electricityMaintenanceIoT = () => {
		this.electricity_miot = !this.electricity_miot;
		if (this.electricity_miot) {
			this.compressed_miot = false;
			this.chiller_miot = false;
			this.fsb_miot = false;
			this.wtp_miot = false;
			this.lowpresscomp_cilt = false;
			this.auxiliary_cilt = false;
			this.cooling_tower_cilt = false;
			this.power_plant_cilt = false;
			this.fsb_cilt = false;
		}
	}
	fsbMaintenanceIoT = () => {
		this.fsb_miot = !this.fsb_miot;
		if (this.fsb_miot) {
			this.compressed_miot = false;
			this.chiller_miot = false;
			this.electricity_miot = false;
			this.wtp_miot = false;
			this.lowpresscomp_cilt = false;
			this.auxiliary_cilt = false;
			this.cooling_tower_cilt = false;
			this.power_plant_cilt = false;
			this.fsb_cilt = false;
		}
	}
	chillerMaintenanceIoT = () => {
		this.chiller_miot = !this.chiller_miot;
		if (this.chiller_miot) {
			this.compressed_miot = false;
			this.fsb_miot = false;
			this.electricity_miot;
			this.wtp_miot = false;
			this.lowpresscomp_cilt = false;
			this.auxiliary_cilt = false;
			this.cooling_tower_cilt = false;
			this.power_plant_cilt = false;
			this.fsb_cilt = false;
		}
	}
	compressedMaintenanceIoT = () => {
		this.compressed_miot = !this.compressed_miot;
		if (this.compressed_miot) {
			this.chiller_miot = false;
			this.fsb_miot = false;
			this.electricity_miot;
			this.wtp_miot = false;
			this.lowpresscomp_cilt = false;
			this.auxiliary_cilt = false;
			this.cooling_tower_cilt = false;
			this.power_plant_cilt = false;
			this.fsb_cilt = false;
		}
	}
}