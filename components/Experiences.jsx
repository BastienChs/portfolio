import Image from "next/image";
import localesJSON from "./assets/locales.json";

export const Experiences = ({experiences, locale}) => {
    return(
        <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
            {localesJSON.informations
                .filter((p) => p.locale === locale)
                .map((info, i) => {
                    return (
                        <section className="w-full" key={i}>
                            <h2 id="experiences" className="secondary-title">Experiences</h2>
                            <p className="section-paragraph">{info.experiences_description}</p>
                            {experiences.map(experience => (
                                <div className="space-y-12 my-16" key={experience.Id}>
                                    <div
                                        className="w-full border border-nav p-4 lg:px-32 lg:py-20 lg:space-x-32 flex justify-center lg:justify-start flex-wrap lg:flex-nowrap">
                                        <div className="mb-6 lg:mb-0  w-1/3 justify-center relative">
                                            <Image src={experience.CompanyLogo} width={"100"} height={"100"}
                                                   className={"border-cyan-500 border-4"}></Image>
                                        </div>
                                        <div
                                            className="flex flex-wrap justify-center text-center lg:text-left lg:block">
                                            <h3 className="text-white text-3xl font-semibold">{experience.CompanyName}</h3>
                                            <h4 className="text-gray-400 text-xl font-semibold">{experience.CompanyLocation} - {experience.CompanyCountry}</h4>
                                            <h5 className={"text-gray-400 text-xl font-semibold"}>{new Date(experience.StartDate).toLocaleDateString(locale)} - {new Date(experience.EndDate).toLocaleDateString(locale)}</h5>
                                            <div
                                                className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                                                {experience.Experiences_Labels.map(expLabel => (
                                                    <div className="badge"
                                                         key={expLabel.id}>{expLabel.Labels.Label}</div>
                                                ))}
                                            </div>
                                            <p className="text-secondary text-justify">{experience.Description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    )
                }
                )}
        </div>
    )
}