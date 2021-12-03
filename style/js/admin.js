const initApp = () => {

    // Toggle sidebar
    const toggleBtn = document.querySelector('[data-toggle-sidebar]');
    const sidebar = document.querySelector('[data-sidebar]');
    const navbar = document.querySelector('.navbar');
    const main = document.querySelector('.main');

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();

        sidebar.classList.toggle('active');
        main.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    const windowWidth = window.innerWidth;
    
    if (windowWidth <= 1024) {
        sidebar.classList.add('active');
        main.classList.add('active');
        navbar.classList.add('active');
    }

    window.addEventListener('resize', () => {
        let width = document.body.clientWidth;
        
        if (width <= 1024) {
            sidebar.classList.add('active');
            main.classList.add('active');
            navbar.classList.add('active');
        } else {
            sidebar.classList.remove('active');
            main.classList.remove('active');
            navbar.classList.remove('active');
        }
    })

    // First Chart
    let firstChart = document.getElementById('firstChart');

    if (firstChart) {
        firstChart.getContext('2d');
        const myFirstChart = new Chart(firstChart, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [30, 28, 45, 44, 25, 30, 15],
                    fill: false,
                    borderColor: '#6f64d3',
                    tension: 0.2,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    xAxis: {
                    display: false
                    },
                    yAxis: {
                        display: false
                    }
                }
            }
        });
    }

    // Second Chart
    let secondChart = document.getElementById('secondChart');

    if (secondChart) {
        secondChart.getContext('2d');

        const mySecondChart = new Chart(secondChart, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [20, 30, 25, 30, 45, 35, 28],
                    fill: false,
                    borderColor: '#7dbff9',
                    tension: 0.2,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    xAxis: {
                    display: false
                    },
                    yAxis: {
                        display: false
                    }
                }
            }
        });
    }

    // Third Chart
    let thirdChart = document.getElementById('thirdChart');

    if (thirdChart) {
        thirdChart.getContext('2d');

        const myThirdChart = new Chart(thirdChart, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [60, 61, 62, 55, 53, 50, 45, 40, 38, 37, 39, 45],
                    fill: false,
                    borderColor: '#fad89e',
                    tension: 0.5,
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    xAxis: {
                    display: false
                    },
                    yAxis: {
                        display: false
                    }
                },
                elements: {
                    point:{
                        radius: 0
                    }
                }
            }
        });
    }

    // Fourth Chart
    let fourthChart = document.getElementById('fourthChart');

    if (fourthChart) {
        fourthChart.getContext('2d');

        const myFourthChart = new Chart(fourthChart, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3, 4, 9, 15, 12, 4, 6],
                    backgroundColor: '#FF6C6C'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                    xAxis: {
                    display: false
                    },
                    yAxis: {
                        display: false
                    }
                }
            }
        });
    }

    // dashboard Chart
    let dashboardChart = document.getElementById('dashboardChart')

    if (dashboardChart) {
        dashboardChart.getContext('2d');

        const myDashboardChard = new Chart(dashboardChart, {
            type: 'line',
            data: {
                labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [180, 170, 70, 110, 100, 60, 70, 135, 110, 98, 90, 180, 170, 80, 150, 85, 190, 90, 110, 120, 90, 140, 70, 50, 140, 120, 130, 140],
                        fill: true,
                        backgroundColor: '#58b7df2c',
                        borderColor: '#48b0db',
                        tension: 0.5,
                    }, 
                    {
                        label: 'My Second Dataset',
                        data: [90, 85, 95, 85, 80, 99, 90, 75, 85, 80, 90, 95, 94, 90, 85, 83, 89, 93, 96, 92, 90, 85, 81, 86, 89, 92, 81, 79],
                        fill: false,
                        borderColor: '#00d673',
                        tension: 0.5,
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                elements: {
                    point:{
                        radius: 0
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 50
                        }
                    }
                }
            }
        });
    }

    // Dashboard Drop Down Menu
    const sideBarDropDown = () => {
        
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach((dropdown) => {
            dropdown.addEventListener('click', (e) => {
                
                let currentDropdown = e.target.closest('.dropdown');
                currentDropdown.classList.toggle('active');

                dropdowns.forEach((d) => {
                    if (d === currentDropdown) return;
                    d.classList.remove('active');
                });
            });
        });
    }

    sideBarDropDown();

    const tagSelection = () => {
        let check = document.querySelector('#produitsSelect');

        if (check) {
            const myOptions = [
                {
                  label: "Produit 1",
                  value: "1",
                },
                {
                  label: "Produit 2",
                  value: "2",
                },
                {
                  label: "Produit 3",
                  value: "3",
                },
                {
                  label: "Produit 4",
                  value: "4",
                },
                {
                  label: "Produit 5",
                  value: "5",
                },
            ];
        
            var instance = new SelectPure("#produitsSelect", {
                options: myOptions,
                multiple: true,
                classNames: {
                    select: "select-pure__select",
                    dropdownShown: "select-pure__select--opened",
                    multiselect: "select-pure__select--multiple",
                    label: "select-pure__label",
                    placeholder: "select-pure__placeholder",
                    dropdown: "select-pure__options",
                    option: "select-pure__option",
                    autocompleteInput: "select-pure__autocomplete",
                    selectedLabel: "select-pure__selected-label",
                    selectedOption: "select-pure__option--selected",
                    placeholderHidden: "select-pure__placeholder--hidden",
                    optionHidden: "select-pure__option--hidden",
                },
                icon: "X",
                inlineIcon: false
            });
        }
    }

    tagSelection();

    const selectAllRecords = () => {
        let generalCheckBox = document.querySelector('#select_all_records');

        if (generalCheckBox) {
            let checkboxes = document.querySelectorAll('input[type=checkbox]');

            generalCheckBox.addEventListener('change', (e) => {
                if (generalCheckBox.checked == true) {
                    checkboxes.forEach((checkbox) => {
                        checkbox.checked = true;
                    });
                } else {
                    checkboxes.forEach((checkbox) => {
                        checkbox.checked = false;
                    });
                }
            });
        }
    }

    selectAllRecords();

    const openBtnDropDown = () => {
        let btnDropDown = document.querySelector('#open-btn-dropdown');

        if (btnDropDown) {
            btnDropDown.addEventListener('click', (e) => {
                e.preventDefault();

                let dropdown = document.querySelector('[data-btn-dropdown]');

                dropdown.classList.toggle('active');
            });
        }
    };

    openBtnDropDown();
    
}

document.addEventListener('DOMContentLoaded', initApp);