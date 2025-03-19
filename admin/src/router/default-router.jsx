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


export const DefaultRoute = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: < Dashboard />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/customerAdd",
        element: <CustomerAdd />,
      },
      {
        path: "/customerEdit",
        element: <CustomerEdit />,
      },
      {
        path: "/customerView",
        element: <CustomerView />,
      },
      {
        path: "/pages-invoice",
        element: <Invoice />,
      },
      {
        path: "/invoiceView",
        element: <InvoiceView />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/transactionNew",
        element: <TransactionNew />,
      },
      {
        path: "/transactionDetail",
        element: <TransactionDetail />,
      },
      {
        path: "/plan",
        element: <Plan />,
      },
      {
        path: "/planAdd",
        element: <PlanAdd />,
      },

      // Calendar
      {
        path: "/Calendar",
        element: <Calendar />,
      },

      // Todo
      {
        path: "/todo",
        element: <Todo />,
      },

      // Form
      // Form Controls
      {
        path: "/formcheckbox",
        element: <Formcheckbox />,
      },
      {
        path: "/formElements",
        element: <FormElements />,
      },
      {
        path: "/formInput",
        element: <FormInput />,
      },
      {
        path: "/formRadio",
        element: <FormRadio />,
      },
      {
        path: "/formSwitch",
        element: <FormSwitch />,
      },
      {
        path: "/formTextarea",
        element: <FormTextarea />,
      },
      {
        path: "/formValidation",
        element: <FormValidation />,
      },

      // Form Widgets
      {
        path: "/datepickr",
        element: <Datepickr />,
      },
      {
        path: "/fileUpload",
        element: <FileUpload />,
      },
      {
        path: "/form-quill",
        element: <FormQuill />,
      },
      {
        path: "/choicejs",
        element: <Choicejs />,
      },

      // Table
      {
        path: "/tables-basic",
        element: <BasicTable />,
      },
      {
        path: "/tables-data",
        element: <DataTable />,
      },
      {
        path: "/editableTable",
        element: <EditableTable />,
      },

      // UI Elements
      {
        path: "/alerts",
        element: <Alerts />,
      },
      {
        path: "/avatars",
        element: <Avatars />,
      },
      {
        path: "/badges",
        element: <Badges />,
      },
      {
        path: "/boxShadow",
        element: <BoxShadow />,
      },
      {
        path: "/breadcrumb",
        element: <Breadcrumb />,
      },
      {
        path: "/buttons",
        element: <Buttons />,
      },
      {
        path: "/buttonsGroup",
        element: <ButtonsGroup />,
      },
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/carousel",
        element: <Carousels />,
      },
      {
        path: "/colors",
        element: <Colors />,
      },
      {
        path: "/grid",
        element: <Grid />,
      },
      {
        path: "/images",
        element: <Images />,
      },
      {
        path: "/listGroup",
        element: <ListGroups />,
      },
      {
        path: "/modal",
        element: <Modals />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
      {
        path: "/pagination",
        element: <Paginations />,
      },
      {
        path: "/popovers",
        element: <Popovers />,
      },
      {
        path: "/progressbars",
        element: <Progressbars />,
      },
      {
        path: "/tabs",
        element: <Tabs />,
      },
      {
        path: "/tooltips",
        element: <Tooltips />,
      },
      {
        path: "/typography",
        element: <Typography />,
      },
      {
        path: "/video",
        element: <Video />,
      },

      {
        path: "/charts",
        element: <Charts />,
      },
      {
        path: "/icons",
        element: <Icons />,
      },

      // Extra Pages
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/termsofUse",
        element: <TermsofUse />,
      },
      {
        path: "/user-AccountSetting",
        element: <UserAccountSetting />,
      },
      {
        path: "/user-privacySetting",
        element: <UserprivacySetting />,
      },
      {
        path: "/user-profileEdit",
        element: <UserProfileEdit />,
      },

      // Pages Section
      {
        path: "/pages-blank-page",
        element: <BlankPage />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/Pricing",
        element: <Pricing />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/Pricing",
        element: <Pricing />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
    ]
  }
]


// Blank Layout route
export const AuthRoutes = [
  {
    path: '',
    element: <BlankLayout />,
    children: [
      {
        path: '/auth/login',
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