function Content ({title, content, author, email}) {
    return(
        <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto">
        <p className="text-3xl font-bold text-neutral-900 mb-2">{title}</p>

        <p className="text-neutral-800 leading-7 mb-6">{content}</p>

        <p className="text-sm text-neutral-500">
        <span className="font-medium">Author:</span> {author}
        </p>
        <p className="text-sm text-neutral-500">Email: {email}</p>
    </div>
    )
}

export default Content;