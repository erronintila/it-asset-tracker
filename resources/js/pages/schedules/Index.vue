<template>
    <div>
        <page-header class="mb-4" :title="'Schedule Board'">
            <template slot="leftSideNavigation">
                <!-- <v-btn
                    class="ml-3"
                    icon
                    :to="{ name: 'locations.create' }"
                    title="Add new location"
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn> -->

                <v-chip label outlined small class="mx-2" :color="status.color">
                    {{ status.text }}
                </v-chip>
            </template>
            <template slot="rightSideNavigation">
                <v-menu rounded offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            v-bind="attrs"
                            v-on="on"
                            title="More action"
                        >
                            <v-icon>
                                mdi-calendar-plus
                            </v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <template v-for="(item, index) in actions">
                            <v-list-item
                                link
                                :key="index"
                                @click="filterAction(item.action)"
                            >
                                <v-list-item-icon>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    <div class="mr-3">
                                        {{ item.text }}
                                    </div>
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-menu>
                <v-btn @click="setToday" icon fab title="Today">
                    <v-icon>
                        mdi-calendar-check
                    </v-icon>
                </v-btn>
                <v-menu rounded offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" title="Status">
                            <v-icon>
                                mdi-list-status
                            </v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <template v-for="(item, index) in statuses">
                            <v-list-item
                                link
                                :key="index"
                                @click="status = item"
                            >
                                <v-list-item-icon>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    <div class="mr-3">
                                        {{ item.text }}
                                    </div>
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-menu>
                <!-- <v-menu rounded offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            v-bind="attrs"
                            v-on="on"
                            icon
                            fab
                            title="Choose format"
                        >
                            <span>{{ typeToLabel[type] }}</span>
                            <v-icon>
                                mdi-calendar
                            </v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="type = 'day'">
                            <v-list-item-title>Day</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'week'">
                            <v-list-item-title>Week</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = 'month'">
                            <v-list-item-title>Month</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="type = '4day'">
                            <v-list-item-title>4 days</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu> -->
            </template>
        </page-header>

        <v-row class="fill-height">
            <v-col>
                <v-sheet height="64">
                    <v-toolbar flat>
                        <v-toolbar-title v-if="$refs.calendar">
                            {{ $refs.calendar.title }}
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn
                            fab
                            text
                            small
                            color="grey darken-2"
                            @click="prev"
                            title="Previous"
                        >
                            <v-icon small>
                                mdi-chevron-left
                            </v-icon>
                        </v-btn>
                        <v-btn
                            fab
                            text
                            small
                            color="grey darken-2"
                            @click="next"
                            title="Next"
                        >
                            <v-icon small>
                                mdi-chevron-right
                            </v-icon>
                        </v-btn>
                        <v-menu rounded offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                    title="Items per page"
                                >
                                    {{ tableOptions.options.itemsPerPage }}
                                </v-btn>
                            </template>

                            <v-list dense>
                                <template
                                    v-for="(item,
                                    index) in tableOptions.itemsPerPageOptions"
                                >
                                    <v-list-item
                                        link
                                        :key="index"
                                        @click="
                                            tableOptions.options.itemsPerPage = item
                                        "
                                    >
                                        <v-list-item-title>
                                            <div class="mr-3">
                                                {{ item }}
                                            </div>
                                        </v-list-item-title>
                                    </v-list-item>
                                </template>
                            </v-list>
                        </v-menu>
                    </v-toolbar>
                </v-sheet>
                <v-sheet height="600" class="mx-4">
                    <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="primary"
                        :events="items"
                        :event-color="getEventColor"
                        :type="'month'"
                        @click:event="showEvent"
                        @click:date="viewDay"
                        @change="updateRange"
                    ></v-calendar>
                    <!-- <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="primary"
                        :events="events"
                        :event-color="getEventColor"
                        :type="type"
                        @click:event="showEvent"
                        @click:more="viewDay"
                        @click:date="viewDay"
                        @change="updateRange"
                    ></v-calendar> -->
                    <!-- <v-menu
                        v-model="selectedOpen"
                        :close-on-content-click="false"
                        :activator="selectedElement"
                        offset-x
                    >
                        <v-card color="grey lighten-4" min-width="350px" flat>
                            <v-toolbar :color="selectedEvent.color" dark>
                                <v-btn icon>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                                <v-toolbar-title
                                    v-html="selectedEvent.name"
                                ></v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>mdi-heart</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </v-toolbar>
                            <v-card-text>
                                <span v-html="selectedEvent.details"></span>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    text
                                    color="secondary"
                                    @click="selectedOpen = false"
                                >
                                    Cancel
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-menu> -->
                </v-sheet>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import WorkOrderDataService from "../../services/WorkOrderDataService";
import moment from "moment";

export default {
    data: () => ({
        actions: [
            { text: "Create Work Order", action: "create", icon: "mdi-plus" },
            { text: "Refresh", action: "refresh", icon: "mdi-refresh" }
            // { text: "Export", action: "export", icon: "mdi-export" }
        ],
        status: {
            text: "Approved",
            action: "approved",
            icon: "mdi-check",
            color: "blue"
        },
        statuses: [
            {
                text: "Pending",
                action: "pending",
                icon: "mdi-clock-time-four-outline",
                color: "grey"
            },
            {
                text: "Approved",
                action: "approved",
                icon: "mdi-check",
                color: "blue"
            },
            {
                text: "Completed",
                action: "completed",
                icon: "mdi-check-all",
                color: "yellow"
            },
            {
                text: "Posted",
                action: "posted",
                icon: "mdi-check-circle",
                color: "green"
            },
            {
                text: "Cancelled",
                action: "cancelled",
                icon: "mdi-cancel",
                color: "red"
            }
        ],
        focus: "",
        type: "month",
        typeToLabel: {
            month: "Month",
            week: "Week",
            day: "Day",
            "4day": "4 Days"
        },
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
        events: [],
        items: [],
        colors: [
            "blue",
            "indigo",
            "deep-purple",
            "cyan",
            "green",
            "orange",
            "grey darken-1"
        ],
        names: [
            "Meeting",
            "Holiday",
            "PTO",
            "Travel",
            "Event",
            "Birthday",
            "Conference",
            "Party"
        ],
        tableOptions: {
            options: {
                sortBy: ["code"],
                sortDesc: [false],
                page: 1,
                itemsPerPage: 10
            },
            loading: false,
            itemsPerPageOptions: [10, 20, 50, 100],
            serverItemsLength: 0,
            headers: [
                { text: "Code", value: "code" },
                { text: "Request Date", value: "request_date" },
                { text: "Description", value: "description" },
                { text: "User", value: "user.name" },
                { text: "Status", value: "status" }
            ]
        },
        scheduled_date: []
    }),
    mounted() {
        this.$refs.calendar.checkChange();
        this.getData();
    },
    methods: {
        getData() {
            this.tableOptions.loading = true;
            return new Promise((resolve, reject) => {
                const {
                    sortBy,
                    sortDesc,
                    page,
                    itemsPerPage
                } = this.tableOptions.options;
                let search = this.search;
                let scheduled_start_date = this.scheduled_date[0];
                let scheduled_end_date = this.scheduled_date[1];
                let status = this.status.text;

                let data = {
                    params: {
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        scheduled_start_date: scheduled_start_date,
                        scheduled_end_date: scheduled_end_date,
                        // search: search
                        status: status
                    }
                };

                WorkOrderDataService.getAll(data)
                    .then(response => {
                        let colors = this.colors;
                        this.items = response.data.data.data.map(function(
                            item
                        ) {
                            let newObj = {};
                            newObj["name"] = item.description;
                            newObj["start"] = moment(
                                item.transactionable.scheduled_start_date
                            ).format("YYYY-MM-DD HH:mm:ss");
                            newObj["end"] = moment(
                                item.transactionable.scheduled_end_date
                            ).format("YYYY-MM-DD HH:mm:ss");
                            newObj["color"] =
                                colors[
                                    Math.floor(
                                        Math.random() * (colors.length - 1)
                                    )
                                ];
                            newObj["timed"] = false;
                            return newObj;
                        });

                        this.tableOptions.serverItemsLength =
                            response.data.data.total;
                        this.tableOptions.loading = false;
                        resolve(this.items);
                    })
                    .catch(error => {
                        this.tableOptions.loading = false;
                        console.log(error.response);
                        reject();
                    });
            });
        },
        updateRange({ start, end }) {
            this.scheduled_date = [start.date, end.date];
            this.getData();

            // this.items = [
            //     {
            //         name: "ajhsdgas",
            //         start: "2021-07-01 01:01:01",
            //         end: "2021-07-15 01:01:01",
            //         color: "blue",
            //         timed: false
            //     }
            // ];
        },
        viewDay({ date }) {
            this.focus = date;
            // this.type = "day";
        },
        getEventColor(event) {
            return event.color;
        },
        setToday() {
            this.focus = "";
        },
        prev() {
            this.$refs.calendar.prev();
        },
        next() {
            this.$refs.calendar.next();
        },
        showEvent({ nativeEvent, event }) {
            const open = () => {
                this.selectedEvent = event;
                this.selectedElement = nativeEvent.target;
                requestAnimationFrame(() =>
                    requestAnimationFrame(() => (this.selectedOpen = true))
                );
            };

            if (this.selectedOpen) {
                this.selectedOpen = false;
                requestAnimationFrame(() =>
                    requestAnimationFrame(() => open())
                );
            } else {
                open();
            }

            nativeEvent.stopPropagation();
        }
    },
    computed: {
        params(nv) {
            return {
                ...this.tableOptions.options,
                // query: this.search
                query: this.status
            };
        }
    },
    watch: {
        params: {
            immediate: true,
            deep: true,
            handler() {
                this.getData();
            }
        }
    },
    activated() {
        this.getData();
    }
};
</script>
