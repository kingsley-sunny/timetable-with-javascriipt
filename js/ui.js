class UI {
  #storage = new TimeTableStorage();

  renderTime(fromTime, toTime) {
    return `${new Date(fromTime).toLocaleTimeString()}`;
  }

  addToTimeList(fromTime, toTime, id) {
    document.getElementById("time-list").innerHTML += `
    <div id="${id}" class="flex space-x-6 py-3 border px-4">
    <div class="flex space-x-6 w-full">
      <p class="">${fromTime}</p>
      <span class="">--</span>
      <p class="">${toTime}</p>
    </div>

    <div class="flex space-x-4">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>

      --->

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-red-600 cursor-pointer"
        id="delete-time-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </div>
  </div>
    `;
  }

  renderAddTimeModal() {
    document.getElementById("modal").innerHTML = `
    <div class="bg-transparent h-screen flex z-10 justify-center items-center fixed w-full">
    <div id="modal-backdrop" class="bg-black/20 fixed inset-0"></div>
    
    <div class="max-w-2xl z-20 w-full max-h-[70vh] overflow-scroll bg-white relative p-4">
      <div class="flex justify-between items-center w-full">
        <div class="text-xl font-semibold">Add Course Schedules</div>
        <div id="modal-cancel-btn" class="text-2xl text-red-600 cursor-pointer">X</div>
      </div>

      <!-- The form -->
     
      <form class="space-y-4 mt-8">
        <div class="">
          <p class="">From Time</p>
          <input name="from-time" type="time" class="border w-full px-2 py-2" name="" id="" />
        </div>

        <div class="">
          <p class="">To Time</p>
          <input type="time" name="to-time" class="border w-full px-2 py-2" name="" id="" />
        </div>

        <!-- Days input and form -->
        <div class="space-y-7">
          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On Monday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="monday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="monday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="monday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="monday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On Tuesday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="tuesday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="tuesday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="tuesday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="tuesday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On Wednesday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="wednesday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="wednesday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="wednesday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="wednesday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On thursday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="thursday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="thursday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="thursday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="thursday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On friday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="friday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="friday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="friday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="friday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      <button
        id="add-time-button"
        class="mt-5 bg-blue-600 w-full text-white px-6 py-3 font-medium text-sm"
      >
        Add Course Schedule
      </button>
    </div>
  </div>
    `;
  }

  renderEditTimeModal(data) {
    document.getElementById("modal").innerHTML = `
    <div class="bg-transparent h-screen flex z-10 justify-center items-center fixed w-full">
    <div id="modal-backdrop" class="bg-black/20 fixed inset-0"></div>
    
    <div class="max-w-2xl w-full max-h-[70vh] overflow-scroll bg-white relative p-4">
      <div class="flex justify-between items-center w-full">
        <div class="text-xl font-semibold">Edit Course Schedule</div>
        <div id="modal-cancel-btn" class="text-2xl text-red-600 cursor-pointer">X</div>
      </div>

      <!-- The form -->
     
      <form class="space-y-4 mt-8">
        <div class="">
          <p class="">From Time</p>
          <input name="from-time" type="time" class="border w-full px-2 py-2" name="" id="" value="${
            data.time.split(" - ")[0]
          }" />
        </div>

        <div class="">
          <p class="">To Time</p>
          <input type="time" name="to-time" class="border w-full px-2 py-2" name="" id="" value="${
            data.time.split(" - ")[1]
          }" />
        </div>

        <!-- Days input and form -->
        <div class="space-y-7">
          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On Monday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="monday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.monday[0]}"
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="monday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.monday[1]}"
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="monday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.monday[2]}"
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="monday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.monday[3]}"
                />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On Tuesday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="tuesday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.tuesday[0]}"
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="tuesday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.tuesday[1]}"
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="tuesday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.tuesday[2]}"
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="tuesday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.tuesday[3]}"
                />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On Wednesday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="wednesday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.wednesday[0]}"
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="wednesday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.wednesday[1]}"
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="wednesday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.wednesday[2]}"
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="wednesday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.wednesday[3]}"
                />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On thursday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="thursday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.thursday[0]}"
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="thursday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.thursday[1]}"
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="thursday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.thursday[2]}"
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="thursday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.thursday[3]}"
                />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-xl font-semibold capitalize">(On friday)</p>

            <div class="flex space-x-2">
              <div class="">
                <p class="">ND1</p>
                <input
                  name="friday-nd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.friday[0]}"
                />
              </div>

              <div class="">
                <p class="">ND2</p>
                <input
                  name="friday-nd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.friday[1]}"
                />
              </div>

              <div class="">
                <p class="">HND1</p>
                <input
                  name="friday-hnd1"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.friday[2]}"
                />
              </div>

              <div class="">
                <p class="">HND2</p>
                <input
                  name="friday-hnd2"
                  type="search"
                  placeholder="course title"
                  class="border w-full px-2 py-2"
                  name=""
                  id=""
                  value="${data.schedules.friday[3]}"
                />
              </div>
            </div>
          </div>
        </div>
      </form>

     <div class="mt-5 flex space-x-3 items-center" >
        <button
        id="update-time-button"
        class=" bg-orange-600 w-full text-white px-6 py-3 font-medium text-sm"
      >
        Update Course Schedule
      </button>

      <button
      id="delete-time-button"
      class=" bg-red-600 w-full text-white px-6 py-3 font-medium text-sm"
    >
      Delete
    </button>
     </div>
    </div>
  </div>
    `;
  }

  syncUIWithStorage() {
    const data = this.#storage.getAllData().map(
      item => `
    <div id="${item.id}" class="px-10 grid added-list grid-cols-12 space-x-2">
    <div
      id="time-clicker"
      class="col-span-1 border cursor-pointer text-center px-2 py-3 flex justify-center items-center"
    >
      ${item.time}
    </div>

    <div class="col-span-1 border text-center grid grid-rows-4 py-3 px-2">
      <div class="">ND 1</div>
      <div class="">ND 2</div>
      <div class="">HND 1</div>
      <div class="">HND 2</div>
    </div>

    <div class="grid grid-cols-5 col-span-10 w-full cursor-pointer">
      <div class="border text-center py-3 px-2 ${
        item.schedules.monday?.length === 0
          ? "flex justify-center items-center"
          : "grid grid-rows-4"
      } gap-2">
        ${
          item.schedules.monday?.length === 0
            ? `  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>`
            : item.schedules.monday?.map(d => `<div class="">${d}</div>`).join("")
        }
      </div>

      <div class="border text-center py-3 px-2 ${
        item.schedules.tuesday?.length === 0
          ? "flex justify-center items-center"
          : "grid grid-rows-4"
      } gap-2">
        ${
          item.schedules.tuesday?.length === 0
            ? `  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>`
            : item.schedules.tuesday?.map(d => `<div class="">${d}</div>`).join("")
        }
      </div>

      <div class="border text-center py-3 px-2 ${
        item.schedules.wednesday?.length === 0
          ? "flex justify-center items-center"
          : "grid grid-rows-4"
      } gap-2">
        ${
          item.schedules.wednesday?.length === 0
            ? `  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>`
            : item.schedules.wednesday?.map(d => `<div class="">${d}</div>`).join("")
        }
      </div>


      <div class="border text-center py-3 px-2 ${
        item.schedules.thursday?.length === 0
          ? "flex justify-center items-center"
          : "grid grid-rows-4"
      } gap-2">
        ${
          item.schedules.thursday?.length === 0
            ? `  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>`
            : item.schedules.thursday?.map(d => `<div class="">${d}</div>`).join("")
        }
      </div>


      <div class="border text-center py-3 px-2 ${
        item.schedules.friday?.length === 0
          ? "flex justify-center items-center"
          : "grid grid-rows-4"
      } gap-2">
        ${
          item.schedules.friday?.length === 0
            ? `  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>`
            : item.schedules.friday?.map(d => `<div class="">${d}</div>`).join("")
        }
      </div>
      
    </div>
  </div>
    `
    );
    console.log("🚀 ~~ file: ui.js:210 ~~ UI ~~ syncUIWithStorage ~~ data:", data);

    document.getElementById("wrapper").innerHTML = data;
  }
}
