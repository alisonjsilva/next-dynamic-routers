export interface RouteConfiguration {
    key: string;
    component: Promise<any>;
    basePaths: {
        [key: string]: string;
    };
}


const routesConfiguration: RouteConfiguration[]  = [
{
        key: "Article",
        component: import("@/app/page"),
        basePaths: {
            pt: "artigo",
            en: "article",
        },
    },
    {
        key: "Blog",
        component: import("@/app/page"),
        basePaths: {
            pt: "blog",
            en: "blog",
        },
    },
]

module.exports = routesConfiguration;