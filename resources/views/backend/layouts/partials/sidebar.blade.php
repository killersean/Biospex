<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        @if ( ! Auth::guest())
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="/images/user-default-160x160.png" class="img-circle" alt="User Image"/>
                </div>
                <div class="pull-left info">
                    <p>{{ $user->profile->full_name }}</p>
                    <!-- Status -->
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
        @endif

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
            <li class="header">NAVIGATION</li>
            <!-- Optionally, you can add icons to the links -->
            <li>
                {!! Html::linkWithIcon(route('admin.dashboard.index'), 'Dashboard', [], ['before' => 'fa fa-dashboard']) !!}
            </li>

            <li class="{!! Html::active('admin.users.') !!}">
                {!! Html::linkWithIcon(route('admin.users.index'), 'Users', [], ['before' => 'fa fa-user']) !!}
            </li>

            <li class="{!! Html::active('admin.groups.') !!}">
                {!! Html::linkWithIcon(route('admin.groups.index'), 'Groups', [], ['before' => 'fa fa-group']) !!}
            </li>

            <li class="{!! Html::active('admin.projects.') !!}">
                {!! Html::linkWithIcon(route('admin.projects.index'), 'Projects', [], ['before' => 'fa fa-folder-o']) !!}
            </li>

            <li class="{!! Html::active('admin.expeditions.') !!}">
                {!! Html::linkWithIcon(route('admin.expeditions.index'), 'Expeditions', [], ['before' => 'fa fa-area-chart']) !!}
            </li>

            <li class="{!! Html::active('admin.actors.') !!}">
                {!! Html::linkWithIcon(route('admin.actors.index'), 'Actors', [], ['before' => 'fa fa-cubes']) !!}
            </li>

            <li class="{!! Html::active('admin.workflows.') !!}">
                {!! Html::linkWithIcon(route('admin.workflows.index'), 'Workflows', [], ['before' => 'fa fa-sitemap']) !!}
            </li>

            <li class="{!! Html::active('admin.faqs.') !!}">
                {!! Html::linkWithIcon(route('admin.faqs.index'), 'FAQs', [], ['before' => 'fa fa-question-circle-o']) !!}
            </li>

            <li class="{!! Html::active('admin.teams.') !!}">
                {!! Html::linkWithIcon(route('admin.teams.index'), 'Teams', [], ['before' => 'fa fa-users']) !!}
            </li>

            <li class="{!! Html::active('admin.resources.') !!}">
                {!! Html::linkWithIcon(route('admin.resources.index'), 'Resources', [], ['before' => 'fa fa-files-o']) !!}
            </li>

            <li class="{!! Html::active('admin.translations.') !!}">
                {!! Html::linkWithIcon(route('admin.translations.index'), 'Translations', [], ['before' => 'fa fa-language']) !!}
            </li>

            <li class="{!! Html::active('admin.ocr') !!}">
                {!! Html::linkWithIcon(route('admin.ocr.index'), 'OCR', [], ['before' => 'fa fa-file-image-o']) !!}
            </li>

            <li class="{!! Html::active('admin.notices.') !!}">{!! Html::linkWithIcon(route('admin.notices.index'), 'Notices', [], ['before' => 'fa fa-newspaper-o']) !!}</li>
            <li class="{!! Html::active('admin.server.') !!}">{!! Html::linkWithIcon(route('admin.server.show'), 'PHP Info', [], ['before' => 'fa fa-circle-o']) !!}</li>
            <li class="{!! Html::active('admin.server.') !!}">{!! Html::linkWithIcon(route('admin.server.log'), 'Log', [], ['before' => 'fa fa-circle-o']) !!}</li>
        </ul><!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
</aside>
