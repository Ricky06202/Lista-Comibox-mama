import { DataGrid } from '@mui/x-data-grid'

const titulos = [
	{ field: 'nombre', headerName: 'Nombre', width: 150 },
	{ field: 'cedula', headerName: 'Cedula', width: 150 },
	{ field: 'edad', headerName: 'Edad', width: 150 },
	{ field: 'pais', headerName: 'Pais', width: 150 },
]

const filas = [
	{ id: 1, nombre: 'Ricardo Sanjur', cedula: '4-816-2442', edad: 21, pais: 'Panama' },
	{ id: 2, nombre: 'Abu', cedula: '4-816-2442', edad: 76, pais: 'Boquete' },
	{ id: 3, nombre: 'Eysbel Gomez', cedula: '4-816-2442', edad: 40, pais: 'David' },
	{ id: 4, nombre: 'Eysbel Daenerys', cedula: '4-816-2442', edad: 5, pais: 'Panama' },
]

export default function ListaBoxeadores() {
	return (
		<section className='p-10'>
			<DataGrid
				columns={titulos}
				rows={filas}
			/>
		</section>
	)
}
