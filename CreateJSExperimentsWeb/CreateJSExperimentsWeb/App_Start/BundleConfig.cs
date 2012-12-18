using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace CreateJSExperimentsWeb
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/experiment1").IncludeDirectory(
                        "~/Scripts/Experiment1/", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/experiment2").IncludeDirectory(
                        "~/Scripts/Experiment2/", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/experiment3").IncludeDirectory(
                        "~/Scripts/Experiment3/", "*.js"));
        }
    }
}