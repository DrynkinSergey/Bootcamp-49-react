import {
	ActionButton,
	Table,
	Td,
	Th,
	ThActions,
	ThAvatar,
	ThIndex,
	Tr,
} from '../styledComponents/Styles'
import Avatar from './Avatar'

export const Home = () => {
	return (
		<>
			<Table>
				<thead>
					<tr>
						<ThIndex>#</ThIndex>
						<ThAvatar>Avatar</ThAvatar>
						<Th>Name</Th>
						<Th>Age</Th>
						<Th>Status</Th>
						<ThActions>Actions</ThActions>
					</tr>
				</thead>
				<tbody>
					{[].map(({ id, name, age, status, avatar }, index) => (
						<Tr key={id} status={status}>
							<Td>{index + 1}</Td>
							<Td>
								<Avatar svg={avatar} />
							</Td>
							<Td>{name}</Td>
							<Td>{age}</Td>
							<Td>{status === 'yes' ? 'Active' : '-'}</Td>
							<Td>
								<ActionButton>Edit</ActionButton>
								<ActionButton>Delete</ActionButton>
							</Td>
						</Tr>
					))}
				</tbody>
			</Table>
		</>
	)
}
