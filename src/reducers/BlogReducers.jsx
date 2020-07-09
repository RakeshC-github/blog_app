export const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG':
            return [...state, {
                title: action.blog.title,
                content: action.blog.content,
                id: Date.now()
            }
            ]
        case 'REMOVE_BLOG':
            return state.filter(blog => blog.id !== action.id);
        default:
            return state;
    }
} 