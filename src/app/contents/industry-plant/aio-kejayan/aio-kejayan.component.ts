import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DatePipe } from '@angular/common';
import { FactoryPlanReportService } from 'src/app/services/factory-report/factory-plan-report.service';

@Component({
	selector: 'app-aio-kejayan',
	templateUrl: './aio-kejayan.component.html',
	styleUrls: ['./aio-kejayan.component.css']
})
export class AioKejayanComponent implements OnInit {
	constructor(private _service: FactoryPlanReportService) {
	}
	lastDay: string | any;
	// WATER INDEX
	data_water_lytd: any = []
	data_water_ytd: any = []
	target_water: any = [];
	index_water_lytd: any = [];
	index_water_ytd: any = [];
	index_water_chart: any = [];
	percentase_water: any = []
	// ELECTRICITY INDEX
	data_electricity_lytd: any = []
	data_electricity_ytd: any = []
	target_electricity: any = [];
	index_electricity_lytd: any = [];
	index_electricity_ytd: any = [];
	index_electricity_chart: any = [];
	percentase_electricity: any = []
	// STEAM INDEX
	data_steam_lytd: any = []
	data_steam_ytd: any = []
	target_steam: any = [];
	index_steam_lytd: any = [];
	index_steam_ytd: any = [];
	index_steam_chart: any = [];
	percentase_steam: any = []
	// BIG DOWNTIME
	data_bigdowntime: any = []
	mesin_bigdowntime: any = []
	hasildowntime_bigdowntime: any = []
	chart_bigdowntime: any
	// ENERGY INDEX
	data_energy_lytd: any = []
	data_energy_ytd: any = []
	target_energy: any = [];
	index_energy_lytd: any = [];
	index_energy_ytd: any = [];
	index_energy_chart: any = [];
	percentase_energy: any = []
	// ENERGY COST OC
	target_energy_cost_oc: any = [];
	index_energy_cost_oc_lytd: any = [];
	index_energy_cost_oc_ytd: any = [];
	index_energy_cost_oc_chart: any = [];
	percentase_oc_energy: any = []
	// ENERGY COST FSB
	data_energy_cost_fsb_lytd: any = []
	data_energy_cost_fsb_ytd: any = []
	target_energy_cost_fsb: any = [];
	index_energy_cost_fsb_lytd: any = [];
	index_energy_cost_fsb_ytd: any = [];
	index_energy_cost_fsb_chart: any = [];
	percentase_fsb_energy: any = []

	// PRODUCTION OUTPUT
	production_output_oc_lytd: any = []
	production_output_fsb_lytd: any = []
	production_output_oc_ytd: any = []
	production_output_fsb_ytd: any = []
	percent_filled_bottle: any = []
	percent_pillow_bar: any = []

	production_output_oc: any = []
	production_output_fsb: any = []

	getProductionBottlePillowBar(data: any) {
		this.production_output_oc_lytd = data.prod_filled_bottle_lytd;
		this.production_output_fsb_lytd = data.prod_pillow_bar_lytd;
		this.production_output_oc_ytd = (data.prod_filled_bottle_ytd / 1000000).toFixed(2);
		this.production_output_fsb_ytd = (data.prod_pillow_bar_ytd / 1000000).toFixed(2);

		this.percent_filled_bottle = data.percent_filled_bottle.toFixed(0);
		this.percent_pillow_bar = data.percent_pillow_bar.toFixed(0);
	}
	noFeature = () => {
		Swal.fire({
			title: 'The feature is not available yet',
			text: 'Be patient please!',
			icon: 'warning',
			confirmButtonText: 'Close',
			showCancelButton: false
		});
	}
	getWaterIndex(data: any) {
		this.data_water_lytd = data.water_lytd;
		this.data_water_ytd = data.water_ytd;
		for (let item of this.data_water_lytd) {
			this.index_water_lytd.push(item.index_lytd);
		}
		for (let item of this.data_water_ytd) {
			this.index_water_ytd.push(item.index_ytd);
		}
		this.percentase_water = (((this.data_water_ytd[0].index_ytd / this.data_water_lytd[0].index_lytd) - 1) * 100).toFixed(0);

		this.target_water.push(2.61);
		this.index_water_chart = new Chart('water_index', {
			type: 'bar',
			data: {
				labels: ['LYTD', 'Target', 'YTD'],
				datasets: [
					{
						yAxisID: 'y',
						data: [this.index_water_lytd, this.target_water, this.index_water_ytd],
						backgroundColor: ['#A6A6A6', '#E4DEDE', '#71acca'],
						borderRadius: 10,
						borderWidth: 1,
						datalabels: {
							color: 'black',
							anchor: 'start',
							align: 'top',
							font: {
								weight: 'bold',
								size: 16,
							},
						},
					},
				],
			},
			plugins: [ChartDataLabels],
			options: {
				events: ['mouseout'],
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				color: 'black',
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						stacked: true,
						ticks: {
							color: 'black',
						},
					},
					y: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						ticks: {
							color: 'black',
						},
						stacked: true,
						display: false,
						position: 'left',
					},
				},
			},
		});
	}

	getElectricityIndex(data: any) {
		this.data_electricity_lytd = data.electricity_lytd;
		this.data_electricity_ytd = data.electricity_ytd;
		for (let item of this.data_electricity_lytd) {
			this.index_electricity_lytd.push(item.index_lytd);
		}
		for (let item of this.data_electricity_ytd) {
			this.index_electricity_ytd.push(item.index_ytd);
		}
		this.target_electricity.push(0.13);
		this.percentase_electricity = (((this.data_electricity_ytd[0].index_ytd / this.data_electricity_lytd[0].index_lytd) - 1) * 100).toFixed(0);

		this.index_electricity_chart = new Chart('electricity_index', {
			type: 'bar',
			data: {
				labels: ['LYTD', 'Target', 'YTD'],
				datasets: [
					{
						yAxisID: 'y',
						data: [this.index_electricity_lytd, this.target_electricity, this.index_electricity_ytd],
						backgroundColor: ['#A6A6A6', '#E4DEDE', '#C8A7D1'],
						borderRadius: 10,
						borderWidth: 1,
						datalabels: {
							color: 'black',
							anchor: 'start',
							align: 'top',
							font: {
								weight: 'bold',
								size: 16,
							},
						},
					},
				],
			},
			plugins: [ChartDataLabels],
			options: {
				events: ['mouseout'],
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				color: 'black',
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						stacked: true,
						ticks: {
							color: 'black',
						},
					},
					y: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						ticks: {
							color: 'black',
						},
						stacked: true,
						display: false,
						position: 'left',
					},
				},
			},
		});
	}

	getSteamIndex(data: any) {
		this.data_steam_lytd = data.steam_lytd;
		this.data_steam_ytd = data.steam_ytd;
		for (let item of this.data_steam_lytd) {
			this.index_steam_lytd.push(item.index_lytd);
		}
		for (let item of this.data_steam_ytd) {
			this.index_steam_ytd.push(item.index_ytd);
		}
		this.target_steam.push(82.3);
		this.percentase_steam = (((this.data_steam_ytd[0].index_ytd / this.data_steam_lytd[0].index_lytd) - 1) * 100).toFixed(0);

		this.index_steam_chart = new Chart('steam_index', {
			type: 'bar',
			data: {
				labels: ['LYTD', 'Target', 'YTD'],
				datasets: [
					{
						yAxisID: 'y',
						data: [this.index_steam_lytd, this.target_steam, this.index_steam_ytd],
						backgroundColor: ['#A6A6A6', '#E4DEDE', '#3AA6B9'],
						borderRadius: 10,
						borderWidth: 1,
						datalabels: {
							color: 'black',
							anchor: 'start',
							align: 'top',
							font: {
								weight: 'bold',
								size: 16,
							},
						},
					},
				],
			},
			plugins: [ChartDataLabels],
			options: {
				events: ['mouseout'],
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				color: 'black',
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						stacked: true,
						ticks: {
							color: 'black',
						},
					},
					y: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						ticks: {
							color: 'black',
						},
						stacked: true,
						display: false,
						position: 'left',
					},
				},
			},
		});
	}

	getBigDowntimeUtility(data: any) {
		this.data_bigdowntime = data
		for (let item of this.data_bigdowntime) {
			this.mesin_bigdowntime.push(item.mesin);
			this.hasildowntime_bigdowntime.push(item.downtime);
		}
		this.chart_bigdowntime = new Chart('big_downtime', {
			type: 'bar',
			data: {
				labels: this.mesin_bigdowntime,
				datasets: [
					{
						yAxisID: 'y',
						data: this.hasildowntime_bigdowntime,
						backgroundColor: ['#00CADC', '#49C3FB', '#65A6FA', '#7E80E7', '#9B57CC'],
						datalabels: {
							anchor: 'start',
							color: 'black',
							align: 'end',
							font: {
								size: 13
							}
						}
					}
				],
			},
			plugins: [ChartDataLabels],
			options: {
				responsive: true,
				maintainAspectRatio: false,
				indexAxis: 'y',
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						enabled: true,
					},
				},
				scales: {
					x: {
						grid: {
							display: false,
						},
						stacked: true,
						title: {
							display: false,
						},
						display: false
					},
					y: {
						stacked: true,
						grid: {
							display: false,
						},
						display: true,
						position: 'left',
					},
				},
			},
		})
	}

	getEnergyIndex(data: any) {
		this.data_energy_lytd = data.energy_lytd;
		this.data_energy_ytd = data.energy_ytd;
		for (let item of this.data_energy_lytd) {
			this.index_energy_lytd.push(item.index_lytd);
		}
		for (let item of this.data_energy_ytd) {
			this.index_energy_ytd.push(item.index_ytd);
		}
		this.target_energy.push(1.60);
		this.percentase_energy = (((this.data_energy_ytd[0].index_ytd / this.data_energy_lytd[0].index_lytd) - 1) * 100).toFixed(0);

		this.index_energy_chart = new Chart('energy_index', {
			type: 'bar',
			data: {
				labels: ['LYTD', 'Target', 'YTD'],
				datasets: [
					{
						yAxisID: 'y',
						data: [this.index_energy_lytd, this.target_energy, this.index_energy_ytd],
						backgroundColor: ['#A6A6A6', '#E4DEDE', '#FF8787'],
						borderRadius: 10,
						borderWidth: 1,
						datalabels: {
							color: 'black',
							anchor: 'start',
							align: 'top',
							font: {
								weight: 'bold',
								size: 16,
							},
						},
					},
				],
			},
			plugins: [ChartDataLabels],
			options: {
				events: ['mouseout'],
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				color: 'black',
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						stacked: true,
						ticks: {
							color: 'black',
						},
					},
					y: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						ticks: {
							color: 'black',
						},
						stacked: true,
						display: false,
						position: 'left',
					},
				},
			},
		});
	}

	getOCEnergyCostIndex(data: any) {
		this.index_energy_cost_oc_lytd = data.oc_cost_lytd
		this.index_energy_cost_oc_ytd = data.oc_cost_ytd
		this.target_energy_cost_oc = data.target_oc

		this.percentase_oc_energy = (((this.index_energy_cost_oc_ytd / this.index_energy_cost_oc_lytd) - 1) * 100).toFixed(0)

		this.index_energy_cost_oc_chart = new Chart('oc_energy_cost', {
			type: 'bar',
			data: {
				labels: ['LYTD', 'Target', 'YTD'],
				datasets: [
					{
						yAxisID: 'y',
						data: [this.index_energy_cost_oc_lytd, this.target_energy_cost_oc, this.index_energy_cost_oc_ytd],
						backgroundColor: ['#A6A6A6', '#E4DEDE', '#e29d69'],
						borderRadius: 10,
						borderWidth: 1,
						datalabels: {
							color: 'black',
							anchor: 'start',
							align: 'top',
							font: {
								weight: 'bold',
								size: 16,
							},
						},
					},
				],
			},
			plugins: [ChartDataLabels],
			options: {
				events: ['mouseout'],
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				color: 'black',
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						stacked: true,
						ticks: {
							color: 'black',
						},
					},
					y: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						ticks: {
							color: 'black',
						},
						stacked: true,
						display: false,
						position: 'left',
					},
				},
			},
		});
	}

	getFSBEnergyCostIndex(data: any) {
		this.index_energy_cost_fsb_lytd = data.fsb_cost_lytd
		this.index_energy_cost_fsb_ytd = data.fsb_cost_ytd
		this.target_energy_cost_fsb = data.target_fsb

		this.percentase_fsb_energy = (((this.index_energy_cost_fsb_ytd / this.index_energy_cost_fsb_lytd) - 1) * 100).toFixed(0)

		this.index_energy_cost_fsb_chart = new Chart('fsb_energy_cost', {
			type: 'bar',
			data: {
				labels: ['LYTD', 'Target', 'YTD'],
				datasets: [
					{
						yAxisID: 'y',
						data: [this.index_energy_cost_fsb_lytd, this.target_energy_cost_fsb, this.index_energy_cost_fsb_ytd],
						backgroundColor: ['#A6A6A6', '#E4DEDE', '#b5bb83'],
						borderRadius: 10,
						borderWidth: 1,
						datalabels: {
							color: 'black',
							anchor: 'start',
							align: 'top',
							font: {
								weight: 'bold',
								size: 16,
							},
						},
					},
				],
			},
			plugins: [ChartDataLabels],
			options: {
				events: ['mouseout'],
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						display: false,
					},
				},
				color: 'black',
				scales: {
					x: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						stacked: true,
						ticks: {
							color: 'black',
						},
					},
					y: {
						beginAtZero: true,
						grid: {
							display: false,
						},
						ticks: {
							color: 'black',
						},
						stacked: true,
						display: false,
						position: 'left',
					},
				},
			},
		});
	}
	ngOnInit(): void {
		Chart.defaults.font.size = 12;

		this._service.getProductionOutput().subscribe((data: any) => {
			this.getProductionBottlePillowBar(data)
			this.getOCEnergyCostIndex(data);
			this.getFSBEnergyCostIndex(data);
		})
		this._service.getWaterIndexPlanReport().subscribe((data: any) => {
			this.getWaterIndex(data)
		})
		this._service.getElectricityIndexPlanReport().subscribe((data: any) => {
			this.getElectricityIndex(data)
		})
		this._service.getSteamIndexPlanReport().subscribe((data: any) => {
			this.getSteamIndex(data)
		})
		this._service.getBigDowntime().subscribe((data: any) => {
			this.getBigDowntimeUtility(data);
		})
		this._service.getEnergyIndexGjKl().subscribe((data: any) => {
			this.getEnergyIndex(data);
		})
	}
}