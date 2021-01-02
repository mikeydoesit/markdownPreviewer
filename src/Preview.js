const Preview = (props) => {
    return (
        <div id="previewWrapper">
            <p id="preview">
                {props.markedInput}
            </p>
        </div>
    )
}

export default Preview