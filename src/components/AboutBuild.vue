<template>
	<div>
		<h1>Home</h1>
		<p>Voyons donc</p>
		<!---->
		<editor-content :editor="editor"/>




	</div>
</template>

<script>
	// Import the editor
	import { Editor, EditorContent } from 'tiptap'

	export default {
		components: {
			EditorContent,
		},
		data() {
			return {
				editor: null,
			}
		},
		mounted() {
			this.editor = new Editor({
				content: '<p>This is just a boring paragraph</p>',
			})
		},
		beforeDestroy() {
			this.editor.destroy()
		},
	}
</script>
