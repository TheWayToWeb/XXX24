const createToggleLevelListHandler = (setState) => {
    return () => {
        setState(prev => !prev);
    }
}

export default createToggleLevelListHandler;