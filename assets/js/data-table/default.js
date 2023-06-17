// invoice datatable
fetch("../assets/js/data-table/datatable.json").then(
  response => response.json()
).then(
  data => {
      const datatable = new simpleDatatables.DataTable("table", {
          type: "string",
          paging: false,
          tabIndex: 1,
          data: {
              headings: [`<img src="../assets/images/user/6.png">`].concat(Object.keys(data[0])),
              data: data.map(item => [false].concat(Object.values(item)))
          },
          rowRender: (rowValue, tr, _index) => {
              if (!tr.attributes) {
                  tr.attributes = {}
              }
              tr.attributes["data-name"] = rowValue[1].data
              return tr
          },
          columns: [
              {
                  select: 0,
                  "data": "imageUrl",
                  "render": function(data, type, row) {
                      return '<img src="'+data+'" />';
                  }
                //   render: (value, _td, _rowIndex, _cellIndex) => `<img src=` + value + `>`
              },
              {
                select: 6,
                render: (value, _td, _rowIndex, _cellIndex) => `<button class="btn bg-light-primary text-primary">` + value + `</button>`
              }
          ]
      })
      datatable.dom.addEventListener("click", e => {
          if (e.target.matches("input[type=checkbox]")) {
              const name = e.target.parentElement.parentElement.dataset.name
              const checked = e.target.checked
          }
      })
  }
)