import { Stack } from "expo-router";
import React from "react";

export default function TabsLayout() {
	return (
		<Stack
			screenOptions={{
				headerShown: true,
			}}
		>
			<Stack.Screen name="add-tasks" />
			<Stack.Screen
				name="login"
				options={{
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
