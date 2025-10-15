import NavigationBar from "../../components/navbar/NavigationBar"
import accommodate from "/accommodate.png";

export default function CSC495() {
    return (
        <div className="bg-gradient-to-br from-red-800 to-purple-800 pt-40 pb-40 min-h-screen">
        <NavigationBar />
        <div className="flex flex-col space-y-4">
          <h1 className="text-center font-bold text-white">Software Engineering Seminar</h1>
          <p className="text-center font-medium text-gray-200 text-2xl">(CSC 495)</p>
          <p className="text-center font-semibold text-xl text-gray-200 w-8/16 mx-auto mt-6">
            This is my capstone project designed, implemented, and showcased for the Software Engineering program I completed at SUNY Oswego.
            I designed a program called AccommoDate, a full stack web application allowing students and staff of the SUNY Oswego Accessibility Resources Office,
            or a similar academic accomodations office, to schedule meeting and exam times, as well as manage documentation.
          </p>
            <img 
            src={accommodate}
            className="rounded-3xl shadow-xl w-5/8 mx-auto border-4 border-white mt-6"
            />
        </div>

        <div className="flex flex-wrap space-x-10 space-y-10 my-10">
          
        

          
        </div>
      </div>
    )
}