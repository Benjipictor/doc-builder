
function HeaderAndPrompt (props) {
const {title, techDescription} = props

    return (
        <header className="component-prompt">
            <h3>{title}</h3>
            <p className="tech-description">
                {techDescription}
            </p>
        </header>
    )
}

export default HeaderAndPrompt;