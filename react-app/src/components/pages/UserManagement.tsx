import { Wrap, WrapItem, Spinner, Center, useDisclosure } from "@chakra-ui/react";
import { memo, VFC, useEffect, useCallback } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetaiModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";



export const UserManagement: VFC = memo(() => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { getUsers, users, loading } = useAllUsers();
	const { onSelectUser, selectedUser } = useSelectUser();
	const { loginUser } = useLoginUser();
	console.log(loginUser);

	useEffect(() => getUsers(), []);

	const onClickUser = useCallback((id: number) => {
		onSelectUser({ id, users, onOpen });
	}, [users, onSelectUser, onOpen]);

	useEffect(() => getUsers(), []);
	return (
		<>
			{loading ? (
				<Center h="100vh">
					<Spinner />
				</Center>
			) : (
				<Wrap p={{ base: 4, md: 10 }} justify="space-around">
					{users.map((user) => (
						<WrapItem key={user.id} mx="auto">
							<UserCard
								id={user.id}
								imageUrl="https://source.unsplash.com/random"
								userName={user.username}
								fullName={user.name}
								onClick={onClickUser}
							/>
						</WrapItem>
					))}
				</Wrap>
			)}
			<UserDetaiModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin}/>
		</>
	)
});