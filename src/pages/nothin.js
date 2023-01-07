<div class="horizontal-scroll">
        <!-- Add day squares -->
        <div class="day-square active">
          {todayDate}
        </div>
        <div class="day-square">
          {
            subtractDays(today, 1).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>

        <div class="day-square">
          {
            subtractDays(today, 2).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 3).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 4).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 5).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 6).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 7).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 8).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 9).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 10).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 11).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 12).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 13).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
        <div class="day-square">
          {
            subtractDays(today, 14).toLocaleDateString("en-us", {
              day: "numeric",
              month: "short",
            })
          }
        </div>
      </div>

      <div class="day-square">
        {
          subtractDays(today, 15).toLocaleDateString("en-us", {
            day: "numeric",
            month: "short",
          })
        }
      </div>