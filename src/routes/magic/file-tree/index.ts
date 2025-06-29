import type { MagicComponent } from '$lib/components/setup/magic/types';
import Folder from '$lib/components/sv/magic/components/file-tree/folder.svelte';
import FileTreeExample from './examples/file-tree-example.svelte';
import FileTreeExampleCode from './examples/file-tree-example.svelte?raw';
import FolderCode from '$lib/components/sv/magic/components/file-tree/folder.svelte?raw';
import File from '$lib/components/sv/magic/components/file-tree/file.svelte';
import FileCode from '$lib/components/sv/magic/components/file-tree/file.svelte?raw';
export let magic: MagicComponent = {
	name: 'File Tree',
	desc: 'A file tree is a button that shows a file tree effect when hovered over.',
	previewComp: FileTreeExample,
	previewCode: {
		filecode: FileTreeExampleCode,
		filename: 'file-tree-example.svelte',
		lang: 'svelte'
	},
	code: [
		{
			filecode: FolderCode,
			filename: 'folder.svelte',
			lang: 'svelte',
      isExpand: true
		},
		{
			filecode: FileCode,
			filename: 'file.svelte',
			lang: 'svelte',
      isExpand: true
		}
	]
};
