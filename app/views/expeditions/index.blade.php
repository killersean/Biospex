<div class="table-responsive">
    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Subjects</th>
            <th>Incomplete</th>
            <th>Complete</th>
            <th>Percent Complete</th>
        </tr>
        </thead>
        <tbody>
        @foreach ($project->expedition as $expedition)
                <tr>
                    <td>{{ $expedition->title }}</td>
                    <td>{{ $expedition->description }}</td>
                    <td>{{ $expedition->created_at }}</td>
                    <td>{{ $expedition->total_subjects }}</td>
                    <td>0</td>
                    <td>0</td>
                    <td class="nowrap"><span class="complete"><span class="complete{{ $expedition->completed }}">&nbsp;</span></span> {{ $expedition->completed }}%
                </tr>
                @endforeach
        </tbody>
    </table>
</div>
