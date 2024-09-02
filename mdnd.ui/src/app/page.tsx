import { Button } from "@/components";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black"> 
			<div className="w-[50%] flex items-center justify-center">
				<Button variant="default" size="medium" noAnimation>Button</Button>
			</div>
		</main>
	);
}
