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
                            <v-list-item link :key="index">
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
                    </v-toolbar>
                </v-sheet>
                <v-sheet height="600">
                    <v-calendar
                        ref="calendar"
                        v-model="focus"
                        color="primary"
                        :events="[
                            {
                                name: 'Sample',
                                start: '2021-08-01 09:00',
                                end: '2021-08-07 10:00',
                                color: 'blue',
                                timed: false
                            },
                            {
                                name: 'Sample',
                                start: '2021-08-01 09:00',
                                end: '2021-08-07 10:00',
                                color: 'blue',
                                timed: false
                            },
                            {
                                name: 'Sample',
                                start: '2021-08-01 09:00',
                                end: '2021-08-07 10:00',
                                color: 'blue',
                                timed: false
                            },
                            {
                                name: 'Sample',
                                start: '2021-08-01 09:00',
                                end: '2021-08-07 10:00',
                                color: 'blue',
                                timed: false
                            }
                        ]"
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

export default {
    data: () => ({
        actions: [
            { text: "Create Work Order", action: "create", icon: "mdi-plus" },
            { text: "Refresh", action: "refresh", icon: "mdi-refresh" },
            { text: "Export", action: "export", icon: "mdi-export" }
        ],
        statuses: [
            {
                text: "Pending",
                action: "pending",
                icon: "mdi-clock-time-four-outline"
            },
            { text: "Approved", action: "approved", icon: "mdi-check" },
            { text: "Completed", action: "completed", icon: "mdi-check-all" },
            { text: "Posted", action: "posted", icon: "mdi-check-circle" },
            { text: "Cancelled", action: "cancelled", icon: "mdi-cancel" }
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
        }
    }),
    mounted() {
        this.$refs.calendar.checkChange();
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
                // let status = this.status;

                let data = {
                    params: {
                        sortBy: sortBy[0],
                        sortType: sortDesc[0] ? "desc" : "asc",
                        page: page,
                        itemsPerPage: itemsPerPage,
                        search: search
                        // status: status
                    }
                };

                WorkOrderDataService.getAll(data)
                    .then(response => {
                        console.log(response.data);
                        this.items = response.data.data.data;
                        this.tableOptions.serverItemsLength =
                            response.data.data.total;
                        this.tableOptions.loading = false;
                        resolve();
                    })
                    .catch(error => {
                        this.tableOptions.loading = false;
                        console.log(error);
                        console.log(error.response);
                        reject();
                    });
            });
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
    }
};
</script>
