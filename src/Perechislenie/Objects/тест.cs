﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Perechislenie
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Тест.
    /// </summary>
    // *** Start programmer edit section *** (тест CustomAttributes)

    // *** End programmer edit section *** (тест CustomAttributes)
    [AutoAltered()]
    [Caption("Тест")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("тестE", new string[] {
            "_11 as \'_11\'"})]
    [View("тестL", new string[] {
            "_11 as \'_11\'"})]
    public class тест : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Perechislenie.перечисление f_11;
        
        // *** Start programmer edit section *** (тест CustomMembers)

        // *** End programmer edit section *** (тест CustomMembers)

        
        /// <summary>
        /// _11.
        /// </summary>
        // *** Start programmer edit section *** (тест._11 CustomAttributes)

        // *** End programmer edit section *** (тест._11 CustomAttributes)
        public virtual IIS.Perechislenie.перечисление _11
        {
            get
            {
                // *** Start programmer edit section *** (тест._11 Get start)

                // *** End programmer edit section *** (тест._11 Get start)
                IIS.Perechislenie.перечисление result = this.f_11;
                // *** Start programmer edit section *** (тест._11 Get end)

                // *** End programmer edit section *** (тест._11 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (тест._11 Set start)

                // *** End programmer edit section *** (тест._11 Set start)
                this.f_11 = value;
                // *** Start programmer edit section *** (тест._11 Set end)

                // *** End programmer edit section *** (тест._11 Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "тестE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View тестE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("тестE", typeof(IIS.Perechislenie.тест));
                }
            }
            
            /// <summary>
            /// "тестL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View тестL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("тестL", typeof(IIS.Perechislenie.тест));
                }
            }
        }
    }
}
