import DashboardTemplate from "../templates/DashBoardTemplate";

const cardsData = [
    {
        title: "Total de consentimientos evaludados",
        value: "$45,231.89",
        description: "+20.1% from last month",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
            >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },

    {
        title: "Consentimientos aprobados",
        value: "+2350",
        description: "+180.1% from last month",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: "Consentiemientos devueltos",
        value: "+12,234",
        description: "+19% from last month",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
            >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
            </svg>
        ),
    },
    {
        title: "Tasa de devolucion completitud/calidad",
        value: "+573",
        description: "+201 since last hour",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
            >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
    },
]

export default function DashboardScreen() {
    return <DashboardTemplate cardsData={cardsData} />
}


