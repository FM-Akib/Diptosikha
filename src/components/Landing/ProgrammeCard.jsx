import { Link } from "react-router-dom";


const ProgrammeCard = ({program}) => {
     const {title,date,description,_id } = program;
    //  console.log(title)
    return (
        <Link to={`/programs/${_id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
        <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
        <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
            <span className="text-xs text-gray-600">{date}</span>
            <p>{description.length>=100?description.slice(0,50):description}</p>
        </div>
    </Link>
    );
};

export default ProgrammeCard;