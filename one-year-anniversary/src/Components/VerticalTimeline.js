import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../CSS/VerticalTimeline.css';
import objects from '../Data/events'

const Timeline = ({ events }) => {

    return (
        <div className='TimelineContainer'>
            <VerticalTimeline>
                {objects.map((object, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#FF90BC', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #FF90BC' }}
                        date={object.date}
                        iconStyle={{ background: '#FDCEDF' }}
                    >
                        <div style={{textAlign:'center', justifyContent: 'center',alignItems: 'center'}}>
                        <h3 className="vertical-timeline-element-title" style={{paddingBottom: '5%'}}>{object.description}</h3>
                        <img src={object.image} alt='Memory' style={{ width: '75%'}} />
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline