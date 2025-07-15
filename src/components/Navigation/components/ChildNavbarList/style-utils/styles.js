export const setScrollingStyles = (startHeight, endHeight, typeOverflow) => ({
    minHeight: `${startHeight}px`,
    maxHeight: `${endHeight}px`,
    overflow: `${typeOverflow}`
});

export const addOffsetStyles = (offsetX, offsetDuration= 0.5) => ({
    marginLeft: `${offsetX}px`,
    transition: `margin-left ${offsetDuration}s ease-in-out`
});