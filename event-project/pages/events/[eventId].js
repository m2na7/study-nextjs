import { Fragment } from "react";

import { getEventById, getAllEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  // getStaticPaths에서는 paths키와 , fallback을 반드시 포함해야함
  // fallback: false -> getStaticPaths가 반환하지 않은 모든 path에 대하여 404페이지 반환
  // true는 데이터에 의존하는 정적페이지가 매우 많고, 빌드 시에 모든 페이지를 생성하는게
  // 너무 비효율적(큰)인 작업일때 사용한다 !

  return {
    paths: paths,
    fallback: false, /// ㅁㄴㅇ
  };
}

export default EventDetailPage;
