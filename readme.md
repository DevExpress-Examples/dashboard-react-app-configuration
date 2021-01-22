# Dashboard Component for React - Configuration

This example illustrates how to configure the React-based `DashboardControl` component. The following properties are used to switch the working mode and the currently displayed dashboard:

- [workingMode](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControlOptions?v=20.2#js_devexpress_dashboard_dashboardcontroloptions_workingmode)
- [dashboardId](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControlOptions?v=20.2#js_devexpress_dashboard_dashboardcontroloptions_dashboardid)

In addition, the example shows how to handle the [onBeforeRender](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.DashboardControlOptions?v=20.2#js_devexpress_dashboard_dashboardcontroloptions_onbeforerender) event and [enable Text Editor functionality](https://docs.devexpress.com/Dashboard/401572/web-dashboard/create-dashboards-on-the-web/designing-dashboard-items/text-box/enable-text-editor-functionality) in code.

See the following file for implementation details:

- [App.js](./dashboard-react-app/src/App.js)

The example uses a modular approach that based on the client-server model. You need a server (backend) project and a client (frontend) application that includes all the necessary styles, scripts and HTML-templates. Note that the script version on the client should match with libraries version on the server.

- The [asp-net-core-server](asp-net-core-server) folder contains the backend project built with ASP.NET Core 3.1.
- The [dashboard-react-app](dashboard-react-app) folder contains the client application built with React.

## Quick Start

In the **asp-net-core-server** folder, run the following command:

```
dotnet run
```
> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). It is insecure, because any website can make cross-origin requests to the app. We recommend you specify the client application's URL directly to prohibit clients from getting access to your personal information on your server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

In the **dashboard-react-app** folder, run the following command:

```
npm start
```

Open ```http://localhost:3000/``` in your browser to see the result.

## Documentation

- [Create a React Dashboard Application](https://docs.devexpress.com/Dashboard/402336/get-started/build-web-dashboard-applications/create-a-react-dashboard-application?v=20.2)
- [Dashboard Component for React](https://docs.devexpress.com/Dashboard/401977/web-dashboard/dashboard-component-for-react?v=20.2)

## Examples

- [Dashboard Component for Angular - Configuration](https://github.com/DevExpress-Examples/dashboard-angular-example)
- [Dashboard Component for Vue - Configuration](https://github.com/DevExpress-Examples/dashboard-vue-example)
- [Get Started - Client-Side Dashboard Application (React)](https://github.com/DevExpress-Examples/dashboard-react-app)
- [ASP.NET Core 3.1 backend for Web Dashboard](https://github.com/DevExpress-Examples/asp-net-core-dashboard-backend)
