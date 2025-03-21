import DefaultLayout from "../layouts/defaultLayout";

// Main Page
import Dashboard from "../views/main/dashboard";

import BlankLayout from "../layouts/blank-layout";

// customer page
import Customer from "../views/app/customer/customer";
import CustomerAdd from "../views/app/customer/customerAdd";
import CustomerEdit from "../views/app/customer/customerEdit";
import CustomerView from "../views/app/customer/customerView";

// Invoice 
import Invoice from "../views/app/invoice/invoice";
import InvoiceView from "../views/app/invoice/invoiceView";

// Order 
import Transaction from "../views/app/transaction/transaction";
import TransactionDetail from "../views/app/transaction/transactionDetail";
import TransactionNew from "../views/app/transaction/transactionNew";

// Product
import Plan from "../views/app/product/plan";
import PlanAdd from "../views/app/product/planAdd";

// Calendar 
import Calendar from "../views/app/calendar";

// Todo
import Todo from "../views/app/todo";

// Form
// Form Controls
import Formcheckbox from "../views/components/forms/form-controls/formCheckbox";
import FormElements from "../views/components/forms/form-controls/formElements";
import FormInput from "../views/components/forms/form-controls/formInput";
import FormRadio from "../views/components/forms/form-controls/formRadio";
import FormSwitch from "../views/components/forms/form-controls/formSwitch";
import FormTextarea from "../views/components/forms/form-controls/formTextarea";
import FormValidation from "../views/components/forms/form-controls/formValidation";

// Form Widgets
import Datepickr from "../views/components/forms/form-widgets/datepickr";
import FileUpload from "../views/components/forms/form-widgets/fileUpload";
import FormQuill from "../views/components/forms/form-widgets/formQuill";
import Choicejs from "../views/components/forms/form-widgets/choiceJs";

// Table
import BasicTable from "../views/components/table/basic-table";
import DataTable from "../views/components/table/dataTable";
import EditableTable from "../views/components/table/editableTable";

// UI Elements
import Alerts from "../views/components/ui-elements/alerts";
import Avatars from "../views/components/ui-elements/avatars";
import Badges from "../views/components/ui-elements/badges";
import BoxShadow from "../views/components/ui-elements/boxShadow";
import Breadcrumb from "../views/components/ui-elements/breadcrumb";
import Buttons from "../views/components/ui-elements/buttons";
import ButtonsGroup from "../views/components/ui-elements/buttonsGroup";
import Cards from "../views/components/ui-elements/cards";
import Carousels from "../views/components/ui-elements/carousel";
import Colors from "../views/components/ui-elements/colors";
import Grid from "../views/components/ui-elements/grid";
import Images from "../views/components/ui-elements/images";
import ListGroups from "../views/components/ui-elements/listGroup";
import Modals from "../views/components/ui-elements/modal";
import Notification from "../views/components/ui-elements/notification";
import Paginations from "../views/components/ui-elements/pagination";
import Popovers from "../views/components/ui-elements/popovers";
import Progressbars from "../views/components/ui-elements/progressbars";
import Tabs from "../views/components/ui-elements/tabs";
import Tooltips from "../views/components/ui-elements/tooltips";
import Typography from "../views/components/ui-elements/typography";
import Video from "../views/components/ui-elements/video";

// Charts
import Charts from "../views/components/charts";

// Icons
import Icons from "../views/components/icons";

// Extra Pages
import PrivacyPolicy from "../views/extraPages/privacyPolicy";
import TermsofUse from "../views/extraPages/termsofUse";
import UserAccountSetting from "../views/extraPages/user-AccountSetting";
import UserprivacySetting from "../views/extraPages/user-PrivacySetting";
import UserProfileEdit from "../views/extraPages/user-ProfileEdit";

// Pages Section
// Auth Pages
import ConfirmMail from "../views/pages/auth/confirm-mail";
import Login from "../views/pages/auth/login";
import Register from "../views/pages/auth/register";
import ResetPassword from "../views/pages/auth/reset-password";
import SignIn from "../views/pages/auth/sign-in";
import LockScreen from "../views/pages/auth/lock-screen";
import RecoverPassword from "../views/pages/auth/recover-password";

// Error Pages
import Error404 from "../views/pages/error/error-404";
import Error500 from "../views/pages/error/error-500";


import BlankPage from "../views/pages/blankPage";
import Chat from "../views/pages/chat";
import ComingSoon from "../views/pages/comingSoon";
import Faq from "../views/pages/faq";
import Maintenance from "../views/pages/maintenance";
import Pricing from "../views/pages/pricing";
import Timeline from "../views/pages/timeline";
import UserProfile from "../views/pages/userProfile";
import { Navigate } from "react-router-dom";
import WithdrawalRequest from "../views/app/withdrawl-request/withdrawlRequest";
import AdminCommission from "../views/app/admin commission/adminCommission";


export const DefaultRoute = [
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/login' replace />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/auth/confirmMail",
        element: <ConfirmMail />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/recover-password",
        element: <RecoverPassword />,
      },
      {
        path: "/auth/lock-screen",
        element: <LockScreen />,
      },
      // Error Pages
      {
        path: "/error/error-404",
        element: <Error404 />,
      },
      {
        path: "/error/error-500",
        element: <Error500 />,
      },
      {
        path: "/Maintenance",
        element: <Maintenance />,
      },
      {
        path: "/comingSoon",
        element: <ComingSoon />,
      },
    ]
  },

  {
    path: "/app",
    element: <DefaultLayout />,
    children: [
      {
        path: "/app",
        element: <Navigate to="/app/dashboard" replace />
      },
      {
        path: "/app/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/app/customer",
        element: <Customer />,
      },
      {
        path: "/app/customerAdd",
        element: <CustomerAdd />,
      },
      {
        path: "/app/customerEdit",
        element: <CustomerEdit />,
      },
      {
        path: "/app/customerView",
        element: <CustomerView />,
      },
      {
        path: "/app/pages-invoice",
        element: <Invoice />,
      },
      {
        path: "/app/invoiceView",
        element: <InvoiceView />,
      },
      {
        path: "/app/transaction",
        element: <Transaction />,
      },
      {
        path: "/app/transactionNew",
        element: <TransactionNew />,
      },
      {
        path: "/app/transactionDetail",
        element: <TransactionDetail />,
      },
      {
        path: "/app/withdrawlRequest",
        element: <WithdrawalRequest />
      },
      {
        path: "/app/adminCommission",
        element: <AdminCommission />
      },
      {
        path: "/app/plan",
        element: <Plan />,
      },
      {
        path: "/app/planAdd",
        element: <PlanAdd />,
      },

      // Calendar
      {
        path: "/app/Calendar",
        element: <Calendar />,
      },

      // Todo
      {
        path: "/app/todo",
        element: <Todo />,
      },

      // Form
      // Form Controls
      {
        path: "/app/formcheckbox",
        element: <Formcheckbox />,
      },
      {
        path: "/app/formElements",
        element: <FormElements />,
      },
      {
        path: "/app/formInput",
        element: <FormInput />,
      },
      {
        path: "/app/formRadio",
        element: <FormRadio />,
      },
      {
        path: "/app/formSwitch",
        element: <FormSwitch />,
      },
      {
        path: "/app/formTextarea",
        element: <FormTextarea />,
      },
      {
        path: "/app/formValidation",
        element: <FormValidation />,
      },

      // Form Widgets
      {
        path: "/app/datepickr",
        element: <Datepickr />,
      },
      {
        path: "/app/fileUpload",
        element: <FileUpload />,
      },
      {
        path: "/app/form-quill",
        element: <FormQuill />,
      },
      {
        path: "/app/choicejs",
        element: <Choicejs />,
      },

      // Table
      {
        path: "/app/tables-basic",
        element: <BasicTable />,
      },
      {
        path: "/app/tables-data",
        element: <DataTable />,
      },
      {
        path: "/app/editableTable",
        element: <EditableTable />,
      },

      // UI Elements
      {
        path: "/app/alerts",
        element: <Alerts />,
      },
      {
        path: "/app/avatars",
        element: <Avatars />,
      },
      {
        path: "/app/badges",
        element: <Badges />,
      },
      {
        path: "/app/boxShadow",
        element: <BoxShadow />,
      },
      {
        path: "/app/breadcrumb",
        element: <Breadcrumb />,
      },
      {
        path: "/app/buttons",
        element: <Buttons />,
      },
      {
        path: "/app/buttonsGroup",
        element: <ButtonsGroup />,
      },
      {
        path: "/app/cards",
        element: <Cards />,
      },
      {
        path: "/app/carousel",
        element: <Carousels />,
      },
      {
        path: "/app/colors",
        element: <Colors />,
      },
      {
        path: "/app/grid",
        element: <Grid />,
      },
      {
        path: "/app/images",
        element: <Images />,
      },
      {
        path: "/app/listGroup",
        element: <ListGroups />,
      },
      {
        path: "/app/modal",
        element: <Modals />,
      },
      {
        path: "/app/notification",
        element: <Notification />,
      },
      {
        path: "/app/pagination",
        element: <Paginations />,
      },
      {
        path: "/app/popovers",
        element: <Popovers />,
      },
      {
        path: "/app/progressbars",
        element: <Progressbars />,
      },
      {
        path: "/app/tabs",
        element: <Tabs />,
      },
      {
        path: "/app/tooltips",
        element: <Tooltips />,
      },
      {
        path: "/app/typography",
        element: <Typography />,
      },
      {
        path: "/app/video",
        element: <Video />,
      },

      {
        path: "/app/charts",
        element: <Charts />,
      },
      {
        path: "/app/icons",
        element: <Icons />,
      },

      // Extra Pages
      {
        path: "/app/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/app/termsofUse",
        element: <TermsofUse />,
      },
      {
        path: "/app/user-AccountSetting",
        element: <UserAccountSetting />,
      },
      {
        path: "/app/user-privacySetting",
        element: <UserprivacySetting />,
      },
      {
        path: "/app/user-profileEdit",
        element: <UserProfileEdit />,
      },

      // Pages Section
      {
        path: "/app/pages-blank-page",
        element: <BlankPage />,
      },
      {
        path: "/app/chat",
        element: <Chat />,
      },
      {
        path: "/app/faq",
        element: <Faq />,
      },
      {
        path: "/app/Pricing",
        element: <Pricing />,
      },
      {
        path: "/app/timeline",
        element: <Timeline />,
      },
      {
        path: "/app/userProfile",
        element: <UserProfile />,
      },
    ]
  }
]


// Blank Layout route
export const AuthRoutes = [
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/login' replace />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/auth/confirmMail",
        element: <ConfirmMail />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/resetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/recover-password",
        element: <RecoverPassword />,
      },
      {
        path: "/auth/lock-screen",
        element: <LockScreen />,
      },
      // Error Pages
      {
        path: "/error/error-404",
        element: <Error404 />,
      },
      {
        path: "/error/error-500",
        element: <Error500 />,
      },
      {
        path: "/Maintenance",
        element: <Maintenance />,
      },
      {
        path: "/comingSoon",
        element: <ComingSoon />,
      },
    ]
  }

]