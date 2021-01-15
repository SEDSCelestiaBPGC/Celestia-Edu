<script>
    export let info;
</script>

<style type="text/scss">
    .info {
        width: calc(50% - 30px);
    }
    .part {
        margin: 5px 0;
        .emph {
            font-weight: 600;
        }
    }
</style>

<div style="display:flex">
    <article class="info">
        <div class="part">
            <span class="emph"> Instructor(s): <br /> </span>
            {info.instructors.join(', ')}
        </div>
        <div class="part">
            <span class="emph"> Mentor(s): <br /> </span>
            {info.mentors.join(', ')}
        </div>
        <div class="part">
            <span class="emph"> Prerequisite(s): <br /> </span>
            {info.prereqs.join(', ')}
        </div>
    </article>
    <article class="info">
        <div class="part">
            <span class="emph"> Description: <br /> </span>
            {info.about}
        </div>
        <div class="part">
            <span class="emph"> Format: <br /> </span>
            {info.format}
        </div>
    </article>
</div>
