const Editor = (props) => {
    return (
        <div id="editorWrapper">
            <textarea id="editor" onChange={props.handleChange}></textarea>
        </div>
    )
}

export default Editor