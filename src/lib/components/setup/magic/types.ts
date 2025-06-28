export type MagicComponent = {
	id?: string;
	name: string;
	desc: string;
	code: Code | Code[];
	component?: any;
	link?: string;
	class?: string;
	showGrid?: boolean;
	previewComp?: any; // Example Preivew Component
	previewCode?: string | Code[]; // Code for the preview component
	examples?: ExampleComponent[];
	tailwind?: string;
	showDots?: boolean;
	usage?: string | Code[];
};
export type Code = {
	filename: string;
	filecode: string;
	lang?: string;
};

export type ExampleComponent = {
	id: number;
	name: string;
	fileName: string;
	code: string | Code[];
	component: any;
	class?: string;
	showGrid?: boolean;
	showDots?: boolean;
};
