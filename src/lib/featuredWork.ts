export interface FeaturedWork {
    company: string;
    title: string;
    description: string;
    backgroundImage: string;
    imageAlt: string;
}

export const works: FeaturedWork[] = [
    {
        company: "Opentext (formerly Microfocus)",
        title: "Arcsight Enterprise Security Manager",
        description: `I currently work at Opentext (formerly Microfocus) on the Arcsight Enterprise Securiity Manager (ESM). \
I wrote and maintain the SCIM api that other applications can use to provision users into ESM. \
Additionally, I wrote and maintain terraform code to deploy ESM into the AWS cloud. \
Most renectly I am working on mvoing ESM from a monolithic application to a distributed set of Kubernetes pods.`,
        backgroundImage: "ArcsightESM.png",
        imageAlt: "Arcsight Enterprise Security Manager",
    },
    {
        company: "BYU Usable Security and Privacy Lab",
        title: "Let's Authenticate",
        description: `I helped a PhD candidate with research for his thesis. I wrote and maintained \
multiple backend API's using NodeJS, a website using Vue, and a certificate authority server in golang. I also \
maintained multiple Ubuntu Linux servers used by the project.`,
        backgroundImage: "LetsAuth.png",
        imageAlt: "BYU Let's Authenticate"
    }
]



