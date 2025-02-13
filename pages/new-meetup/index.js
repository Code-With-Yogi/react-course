import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";

// our-domain.com/new-meetup
function NewMeetupPage() {

  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push('/')
  }

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities.!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
export default NewMeetupPage;
