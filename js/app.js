window.onload = () => {
  const ui = new UI();
  const storage = new TimeTableStorage();

  ui.syncUIWithStorage();

  const timePlusButton = document.getElementById("new-schedule-btn");

  timePlusButton.addEventListener("click", e => {
    ui.renderAddTimeModal();

    document.getElementById("modal-backdrop").addEventListener("click", () => {
      document.getElementById("modal").innerHTML = "";
    });

    document.getElementById("modal-cancel-btn").addEventListener("click", () => {
      document.getElementById("modal").innerHTML = "";
    });

    // handle form submit
    const addTimeButton = document.getElementById("add-time-button");

    addTimeButton.addEventListener("click", () => {
      const fromTime = document.querySelector("input[name='from-time']");
      const toTime = document.querySelector("input[name='to-time']");

      const mondayNd1 = document.querySelector("input[name='monday-nd1']").value;
      const mondayNd2 = document.querySelector("input[name='monday-nd1']").value;
      const mondayHnd1 = document.querySelector("input[name='monday-hnd1']").value;
      const mondayHnd2 = document.querySelector("input[name='monday-hnd2']").value;

      // tuesday
      const tuesdayNd1 = document.querySelector("input[name='tuesday-nd1']").value;
      const tuesdayNd2 = document.querySelector("input[name='tuesday-nd1']").value;
      const tuesdayHnd1 = document.querySelector("input[name='tuesday-hnd1']").value;
      const tuesdayHnd2 = document.querySelector("input[name='tuesday-hnd2']").value;

      // wednesday
      const wednesdayNd1 = document.querySelector("input[name='wednesday-nd1']").value;
      const wednesdayNd2 = document.querySelector("input[name='wednesday-nd1']").value;
      const wednesdayHnd1 = document.querySelector("input[name='wednesday-hnd1']").value;
      const wednesdayHnd2 = document.querySelector("input[name='wednesday-hnd2']").value;

      // thursday
      const thursdayNd1 = document.querySelector("input[name='thursday-nd1']").value;
      const thursdayNd2 = document.querySelector("input[name='thursday-nd1']").value;
      const thursdayHnd1 = document.querySelector("input[name='thursday-hnd1']").value;
      const thursdayHnd2 = document.querySelector("input[name='thursday-hnd2']").value;

      // friday
      const fridayNd1 = document.querySelector("input[name='friday-nd1']").value;
      const fridayNd2 = document.querySelector("input[name='friday-nd1']").value;
      const fridayHnd1 = document.querySelector("input[name='friday-hnd1']").value;
      const fridayHnd2 = document.querySelector("input[name='friday-hnd2']").value;

      if (!fromTime.value || !toTime.value) {
        alert("Time must be filled");
      } else {
        const id = `${Math.random().toString(36)}_${Date.now().toString(36)}`;

        // push to store
        storage.addData({
          id,
          time: `${fromTime.value} - ${toTime.value}`,
          schedules: {
            monday: [mondayNd1, mondayNd2, mondayHnd1, mondayHnd2],
            tuesday: [tuesdayNd1, tuesdayNd2, tuesdayHnd1, tuesdayHnd2],
            wednesday: [wednesdayNd1, wednesdayNd2, wednesdayHnd1, wednesdayHnd2],
            thursday: [thursdayNd1, thursdayNd2, thursdayHnd1, thursdayHnd2],
            friday: [fridayNd1, fridayNd2, fridayHnd1, fridayHnd2],
          },
        });

        // Add to ui
        ui.syncUIWithStorage();

        // clear the value
        toTime.value = "";
        fromTime.value = "";

        document.getElementById("modal").innerHTML = "";
      }
    });
  });

  window.addEventListener("click", e => {
    document.querySelectorAll(".added-list")?.forEach(element => {
      element.addEventListener("click", e => {
        const data = storage.getSingleData(element.id);

        if (data) {
          ui.renderEditTimeModal(data);
        }

        document.getElementById("modal-backdrop").addEventListener("click", () => {
          document.getElementById("modal").innerHTML = "";
        });

        document.getElementById("modal-cancel-btn").addEventListener("click", () => {
          document.getElementById("modal").innerHTML = "";
        });

        // update course
        const updateTimeButton = document.getElementById("update-time-button");
        const deleteTimeButton = document.getElementById("delete-time-button");

        updateTimeButton.addEventListener("click", () => {
          const fromTime = document.querySelector("input[name='from-time']");
          const toTime = document.querySelector("input[name='to-time']");

          const mondayNd1 = document.querySelector("input[name='monday-nd1']").value;
          const mondayNd2 = document.querySelector("input[name='monday-nd1']").value;
          const mondayHnd1 = document.querySelector("input[name='monday-hnd1']").value;
          const mondayHnd2 = document.querySelector("input[name='monday-hnd2']").value;

          // tuesday
          const tuesdayNd1 = document.querySelector("input[name='tuesday-nd1']").value;
          const tuesdayNd2 = document.querySelector("input[name='tuesday-nd1']").value;
          const tuesdayHnd1 = document.querySelector("input[name='tuesday-hnd1']").value;
          const tuesdayHnd2 = document.querySelector("input[name='tuesday-hnd2']").value;

          // wednesday
          const wednesdayNd1 = document.querySelector("input[name='wednesday-nd1']").value;
          const wednesdayNd2 = document.querySelector("input[name='wednesday-nd1']").value;
          const wednesdayHnd1 = document.querySelector("input[name='wednesday-hnd1']").value;
          const wednesdayHnd2 = document.querySelector("input[name='wednesday-hnd2']").value;

          // thursday
          const thursdayNd1 = document.querySelector("input[name='thursday-nd1']").value;
          const thursdayNd2 = document.querySelector("input[name='thursday-nd1']").value;
          const thursdayHnd1 = document.querySelector("input[name='thursday-hnd1']").value;
          const thursdayHnd2 = document.querySelector("input[name='thursday-hnd2']").value;

          // friday
          const fridayNd1 = document.querySelector("input[name='friday-nd1']").value;
          const fridayNd2 = document.querySelector("input[name='friday-nd1']").value;
          const fridayHnd1 = document.querySelector("input[name='friday-hnd1']").value;
          const fridayHnd2 = document.querySelector("input[name='friday-hnd2']").value;

          if (!fromTime.value || !toTime.value) {
            alert("Time must be filled");
          } else {
            // push to store
            storage.updateData(element.id, {
              time: `${fromTime.value} - ${toTime.value}`,
              schedules: {
                monday: [mondayNd1, mondayNd2, mondayHnd1, mondayHnd2],
                tuesday: [tuesdayNd1, tuesdayNd2, tuesdayHnd1, tuesdayHnd2],
                wednesday: [wednesdayNd1, wednesdayNd2, wednesdayHnd1, wednesdayHnd2],
                thursday: [thursdayNd1, thursdayNd2, thursdayHnd1, thursdayHnd2],
                friday: [fridayNd1, fridayNd2, fridayHnd1, fridayHnd2],
              },
            });

            // Add to ui
            ui.syncUIWithStorage();

            // clear the value
            toTime.value = "";
            fromTime.value = "";

            document.getElementById("modal").innerHTML = "";
          }
        });

        deleteTimeButton.addEventListener("click", e => {
          storage.deleteData(element.id);
          ui.syncUIWithStorage();
          document.getElementById("modal").innerHTML = "";
        });
      });
    });
  });
};
