export const classs = {
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        lineHeight: 1.5,
        mt: 3
    },
    Subtitle: {
        fontSize: "24px",
        fontWeight: "bold",
        lineHeight: 1.5,
        mt: 2
    },
    text: {
        fontSize: "16px",
        mt: 2,
        lineHeight: 1.6,
        mt: 3
    },
    card: {
        width: "100%",
        height: "100%",
        transition: 'transform 0.3s, box-shadow 0.3s', // Add transition for smooth effect
        '&:hover': {
            transform: 'scale(1.05)', // Scale up on hover
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Add shadow on hover
        },
    }
}