import {AssociatedProjectType, ProjectDescriptionType} from "../types";
import {CardCarouselTemplate} from "../components/CardCarouselTemplate";
import {AssociatedProjectProps} from "../props";

export const extractAssociatedProjectsFromProjectDescription = (proj: ProjectDescriptionType) => proj.associatedProjects?.map((item: AssociatedProjectType) => ({
    heading: item.heading,
    description: item.description,
    carousel: {
        cards: item.carousel,
        template: CardCarouselTemplate
    }
} as AssociatedProjectProps));
