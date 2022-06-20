'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">museo-eii-admin documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Escribe para buscar"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Comenzando</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Descripción general
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencias
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Propiedades
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Módulos</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f85e5a329ef96032016aaa610bc200f306c291301ed8daab9e56c3e42897f6a98a0168728c6dc1f826c04754c68dc1a92a711ed7f38b08ac12c4bb425509d3c8"' : 'data-target="#xs-components-links-module-AppModule-f85e5a329ef96032016aaa610bc200f306c291301ed8daab9e56c3e42897f6a98a0168728c6dc1f826c04754c68dc1a92a711ed7f38b08ac12c4bb425509d3c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Componentes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f85e5a329ef96032016aaa610bc200f306c291301ed8daab9e56c3e42897f6a98a0168728c6dc1f826c04754c68dc1a92a711ed7f38b08ac12c4bb425509d3c8"' :
                                            'id="xs-components-links-module-AppModule-f85e5a329ef96032016aaa610bc200f306c291301ed8daab9e56c3e42897f6a98a0168728c6dc1f826c04754c68dc1a92a711ed7f38b08ac12c4bb425509d3c8"' }>
                                            <li class="link">
                                                <a href="components/AddCompComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCompComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddPeriodComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddPeriodComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompInputsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompInputsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConfirmationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CpuTypeDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CpuTypeDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CpuTypeFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CpuTypeFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormEditCompComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormEditCompComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormEditPeriodComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormEditPeriodComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPeriodsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPeriodsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyComponentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MyComponentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeriodComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeriodComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeriodInputsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeriodInputsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Clases</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ComponentMock.html" data-type="entity-link" >ComponentMock</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cpu.html" data-type="entity-link" >Cpu</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenericComp.html" data-type="entity-link" >GenericComp</a>
                            </li>
                            <li class="link">
                                <a href="classes/Period.html" data-type="entity-link" >Period</a>
                            </li>
                            <li class="link">
                                <a href="classes/PeriodMock.html" data-type="entity-link" >PeriodMock</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserMock.html" data-type="entity-link" >UserMock</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Inyectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ComponentService.html" data-type="entity-link" >ComponentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PeriodService.html" data-type="entity-link" >PeriodService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guardias</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/MyComponent.html" data-type="entity-link" >MyComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscelánea</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Rutas</a>
                        </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentación generada utilizando <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});